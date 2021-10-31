import mongoose from "mongoose";

const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    name: { type: String, required: true },
  },

  { timestamps: true }
);

export default model("player", playerSchema);
