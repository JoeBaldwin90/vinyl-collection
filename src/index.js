import "@babel/polyfill";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import vinylRouter from "./routes/vinylRouter";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log(db, "Connected to database!!"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
app.use("/api", vinylRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
