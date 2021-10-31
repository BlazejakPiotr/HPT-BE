import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tournamentSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String },
    notes: { type: String },

    buyin: { type: Number, required: true },
    currency: { type: String, required: true },
    chips: { type: Number, required: true },

    rounds: { type: Array },
    players: { type: Array },
  },

  { timestamps: true }
);

export default model("tournament", tournamentSchema);
