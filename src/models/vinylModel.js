import mongoose from "mongoose";
const { Schema } = mongoose;  

const vinylModel = new Schema({
  artist: { type: String, default: "Unknown" },
  album: { type: String, default: "Unknown" },
  genre: { type: String, default: "Unknown" },
  year: { type: Number, min: 1600, max: 2030, default: 2020 },
  image: { type: String, default: "" },
  link: { type: String, default: "" },
  owned: { type: Boolean, default: false },
});

export default mongoose.model("Vinyl", vinylModel);
