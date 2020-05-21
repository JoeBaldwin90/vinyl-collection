import express from "express";
import mongoose from "mongoose";
import Vinyl from "../models/vinylModel";

const router = express.Router();

// Middleware to find specific record by request params
const getVinyl = async (req, res, next) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    if (err) {
      return res.status(500).send(`Can't find vinyl. Error message: ${err.message}`);
    }
    if (vinyl) {
      res.vinyl = vinyl;
      return next();
    }
    return res.sendStatus(404);
  });
}

// Get all
router.route("/vinyls").get(async (req, res) => {
  try {
    const vinyls = await Vinyl.find();
    res.json(vinyls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Find one
router.get("/vinyls/:id", getVinyl, (req, res) => {
   res.json(res.vinyl);
});

// Add one
router.post("/vinyls/", async (req, res) => {
  const vinyl = new Vinyl(req.body);
  try {
    const newVinyl = await vinyl.save();
    res.status(201).json(newVinyl);
  } catch {
    res.status(400).json({ message: err.message });
  }
});

// Edit one
router.patch("/vinyls/:id", getVinyl, async (req, res) => {});

// Delete one
router.delete("/vinyls/:id", getVinyl, async (req, res) => {});

export default router;
