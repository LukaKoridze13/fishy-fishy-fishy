// models/NewsModel.ts
import mongoose, { Schema, Document, Model } from "mongoose";

interface INews extends Document {
  titlePrimary: string;
  titleSecondary?: string | null;
  descriptionPrimary: string;
  descriptionSecondary?: string | null;
  buttonPrimary?: string | null;
  buttonSecondary?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new Schema<INews>(
  {
    titlePrimary: { type: String, required: true },
    titleSecondary: { type: String, default: null },
    descriptionPrimary: { type: String, required: true },
    descriptionSecondary: { type: String, default: null },
    buttonPrimary: { type: String, default: null },
    buttonSecondary: { type: String, default: null },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

const NewsModel: Model<INews> = (mongoose.models?.News as Model<INews>) || mongoose.model<INews>("News", NewsSchema);

export default NewsModel;
