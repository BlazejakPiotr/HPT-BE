import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tournamentSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String },
    date: { type: String, required: true },
    location: { type: String },
    format: { type: String, required: true },
    notes: { type: String },
    buyin: { type: Number, required: true },
    currency: { type: String, required: true },
    chips: { type: Number, required: true },
    players: { type: Array },
    rounds: { type: Array },
  },

  { timestamps: true }
);

export default model("tournament", tournamentSchema);
