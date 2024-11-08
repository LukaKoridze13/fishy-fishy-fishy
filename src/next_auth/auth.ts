import connectToMongoDB from "@/mongodb/connectToMongoDB";
import RoleModel from "@/mongodb/models/RoleModel";
import UserModel from "@/mongodb/models/UserModel";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

interface GoogleUser {
  id: string;
  email: string;
  name: string;
  image: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
  callbacks: {
    async signIn({ user }) {
      await connectToMongoDB();

      const { email, id, image, name } = user as GoogleUser;

      let existingUser = await UserModel.findOne({ email });

      if (!existingUser) {
        const isSuperAdmin = email === process.env.SUPERADMIN_EMAIL;
        const roleNames = isSuperAdmin ? ["user", "superadmin"] : ["user"];

        const roles = await Promise.all(
          roleNames.map(async (roleName) => {
            let role = await RoleModel.findOne({ name: roleName });
            if (!role) {
              role = await RoleModel.create({ name: roleName });
            }
            return role._id;
          })
        );
        existingUser = await UserModel.create({
          googleId: id,
          email,
          name,
          image,
          roles,
        });
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      const callbackUrl = new URL(url, baseUrl).searchParams.get("callbackUrl");
      return callbackUrl ? decodeURIComponent(callbackUrl) : baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
