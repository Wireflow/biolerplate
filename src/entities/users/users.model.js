import mongoose from "mongoose";
import { schema } from "../_common/schema.models.js";
const Schema = mongoose.Schema;

// Create a schema for the User
const userSchema = new Schema({
  username: {
    unique: true,
    required: true,
    ...schema.username,
  },
  password: {
    required: true,
    ...schema.password,
  },
});

// Create a model for the User
const User = mongoose.model("User", userSchema);

module.exports = User;
