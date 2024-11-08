import mongoose, { Schema, Document, Model } from "mongoose";
import { IRole } from "./RoleModel";

interface IUser extends Document {
  googleId: string;
  email: string;
  name: string;
  image?: string;
  roles: IRole[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    roles: [{ type: Schema.Types.ObjectId, ref: "Role", required: true }],
  },
  { timestamps: true }
);

const UserModel = (mongoose.models?.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
