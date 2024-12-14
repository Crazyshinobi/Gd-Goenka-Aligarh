const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
