import mongoose from "mongoose";
import { password, email } from "./_common/schema.models.js";
const Schema = mongoose.Schema;

// Create a schema for the User
const userSchema = new Schema(
  {
    email: {
      unique: true,
      required: true,
      lowercase: true,
      ...email,
    },
    password: {
      required: true,
      ...password,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model for the User
const User = mongoose.model("User", userSchema);

export default User;
