import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import tournamentsRouter from "./services/tournaments/index.js";
import playersRouter from "./services/players/index.js";

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.use("/tournaments", tournamentsRouter);
server.use("/players", playersRouter);

// console.table(listEndpoints(server));

// server.listen(port, () => {
//   console.log("server running on port " + port);
// });

mongoose.connect(process.env.MONGO_CONNECTION);

mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`server running on port ${port}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
