const mongoose = require("mongoose");
const Job = require("../models/Job");

const jobApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    expected_salary: {
      type: String,
      required: true,
    },
    last_organization: {
      type: String,
      required: true,
    },
    last_salary: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
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
