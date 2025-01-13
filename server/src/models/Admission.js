const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    academic_year: {
      type: Number,
      required: true,
    },
   
    grade: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;
