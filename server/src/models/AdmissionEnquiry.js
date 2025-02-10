const mongoose = require("mongoose");

const admissionEnquriySchema = new mongoose.Schema(
  {
    parent_name: {
      type: String,
      requried: true,
    },
    student_name: {
      type: String,
      requried: true,
    },
    parent_email_address: {
      type: String,
      requried: true,
    },
    mobile: {
      type: Number,
      requried: true,
    },
    state: {
      type: String,
      requried: true,
    },
    city: {
      type: String,
      requried: true,
    },
    grade: {
      type: String,
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

const AdmissionEnquiry = mongoose.model("AdmissionEnquiry", admissionEnquriySchema);

module.exports = AdmissionEnquiry;