import express from "express";
import playerSchema from "./schema.js";

const playersRoute = express.Router();

playersRoute.get("/", async (req, res, next) => {
  try {
    const players = await playerSchema.find();
    res.send(players);
  } catch (error) {
    next(error);
  }
});

playersRoute.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

playersRoute.post("/", async (req, res, next) => {
  try {
    const newPlayer = new playerSchema(req.body);
    const { _id } = await newPlayer.save();
    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
});

playersRoute.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

playersRoute.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default playersRoute;
