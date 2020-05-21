import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const server = express();

const db = mongoose.connect(process.env.MONGO_SRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.get("/", (req, res) => {
  res.send("Homepage");
});

server.listen(8000, () => {
  console.log("server started at http://localhost:8000");
});
