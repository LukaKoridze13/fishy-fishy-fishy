import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRole extends Document {
  name: string;
}

const RoleSchema = new Schema<IRole>({
  name: { type: String, required: true, unique: true },
});

const RoleModel = (mongoose.models?.Role as Model<IRole>) || mongoose.model<IRole>("Role", RoleSchema);

export default RoleModel;
