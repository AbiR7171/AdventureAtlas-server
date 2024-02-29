import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: [true, "name is required"] },
    userName: {
      type: String,
      required: [true, "userName is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password:{
        type: String, required:[true, "password is required",],minlength:[6, "password must contain 6 letter"]
    }
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("User", userSchema);
