// src/infrastructure/database/mongoose/models/PostModel.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  userId: mongoose.Types.ObjectId; // Relación con User
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Referencia al modelo User
});

export const PostModel = mongoose.model<IPost>("Post", PostSchema);
