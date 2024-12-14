const mongoose = require("mongoose");
const Job = require("../models/Job");

const jobApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    personal_details: {
      name: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      father_name: {
        type: String,
        required: true,
      },
      occupation: {
        type: String,
        required: true,
      },
      children: {
        type: Number,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
    },
    address: {
      house_no: {
        type: String,
        required: true,
      },
      lane: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      mobile: {
        type: Number,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    academic_details: {
      degree: {
        type: String,
        required: true,
      },
      institute: {
        type: String,
        required: true,
      },
      dissertation: {
        type: String,
        required: true,
      },
      advisor: {
        type: String,
        required: true,
      },
      registration_date: {
        type: Date,
        required: true,
      },
      submission_date: {
        type: Date,
        required: true,
      },
    },
    educational_qualification: {
      type: {
        type: String,
        enum: ["UG", "PG"],
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      institute: {
        type: String,
        required: true,
      },
      start_year: {
        type: Date,
        required: true,
      },
      end_year: {
        type: Date,
        required: true,
      },
      specialization: {
        type: String,
        required: true,
      },
      marks: {
        type: Number,
        required: true,
      },
      division: {
        type: String,
        enum: ["I", "II", "III"],
        required: true,
      },
      ctet: {
        type: String,
        enum: ["yes", "no"],
        required: true,
      },
    },
    teaching_experience: {
      institute: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      start_date: {
        type: Date,
        required: true,
      },
      end_date: {
        type: Date,
        required: true,
      },
      classes_taught: {
        type: String,
        required: true,
      },
      years: {
        type: Number,
        required: true,
      },
    },
    achievement: {
      type: String,
      required: true,
    },
    references: {
      name: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    image: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
