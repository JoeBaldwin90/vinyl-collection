import express from "express";
import Vinyl from '../models/vinylModel'

const router = express.Router();

router.route("/vinyl").get(async (req, res) => {
  try {
    const vinyls = await Vinyl.find();
    res.json(vinyls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
