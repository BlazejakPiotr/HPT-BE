import express from "express";
import touranmentsSchema from "./schema.js";

const tournamentsRoute = express.Router();

tournamentsRoute.get("/", async (req, res, next) => {
  try {
    const tournaments = await touranmentsSchema.find();
    res.send(tournaments);
  } catch (error) {
    next(error);
  }
});

tournamentsRoute.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

tournamentsRoute.post("/", async (req, res, next) => {
  try {
    const newTournament = new touranmentsSchema(req.body);
    const { _id } = await newTournament.save();
    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
});

tournamentsRoute.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

tournamentsRoute.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default tournamentsRoute;
