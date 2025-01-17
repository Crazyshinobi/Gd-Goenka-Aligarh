const mongoose = require("mongoose");

const admissionApplicaionQuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reqired: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AdmissionApplicationQuery = mongoose.model(
  "AdmissionApplicationQuery",
  admissionApplicaionQuerySchema
);

module.exports = AdmissionApplicationQuery;
