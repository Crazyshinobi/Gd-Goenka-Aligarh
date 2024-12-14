const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["club", "blog", "assembly", "event", "news"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
