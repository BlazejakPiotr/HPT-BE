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
    const id = req.params.id;
    const tournament = await touranmentsSchema.findById(id);
    if (tournament) {
      res.send(tournament);
    } else {
      console.log("error");
    }
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
    const id = req.params.id;
    const editedTournament = await touranmentsSchema.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (editedTournament) {
      res.send(editedTournament);
    } else {
      console.log("error");
    }
  } catch (error) {
    next(error);
  }
});

export default tournamentsRoute;
