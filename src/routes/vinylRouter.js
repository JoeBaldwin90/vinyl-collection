import express from "express";
import Vinyl from "../models/vinylModel";
import controller from "../controller/vinylController";

const router = express.Router();

// Middleware to find specific record by request params
const getVinyl = async (req, res, next) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    if (err) {
      return res.status(500).json({ message: err.mesaage });
    }
    if (vinyl) {
      res.vinyl = vinyl;
      return next();
    }
    return res.sendStatus(404);
  });
};

router.get("/vinyls", controller.getAll);
router.get("/vinyls/:id", getVinyl, controller.getOne);
router.post("/vinyls/", controller.post);
router.patch("/vinyls/:id", getVinyl, controller.patch);
router.delete("/vinyls/:id", getVinyl, controller.delete);

export default router;
