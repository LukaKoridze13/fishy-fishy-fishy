import connectToMongoDB from "@/mongodb/connectToMongoDB";
import UserModel from "@/mongodb/models/UserModel";
import { auth } from "@/next_auth/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import CMSHeader from "@/components/cms/sections/CMSHeader";
import PageFrame from "@/components/frames/PageFrame";
import CMSMenu from "@/components/cms/sections/CMSMenu";
import FlexBox from "@/components/frames/FlexBox";

export async function generateMetadata() {
  const t = await getTranslations("ContentManagementSystem");
  return {
    title: t("tabTitle"),
  };
}

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  await connectToMongoDB();

  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  const user = await UserModel.findOne({ email: session.user.email }).populate("roles");

  if (!user || !user.roles.some((role) => role.name === "superadmin")) {
    redirect("/auth/signin");
  }

  return (
    <PageFrame className="min-h-[100dvh] bg-lightBlue ">
      <CMSHeader />
      <CMSMenu />
      {children}
    </PageFrame>
  );
}
