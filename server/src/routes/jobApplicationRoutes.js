const express = require("express");
const {
  createJobApplication,
  getJobApplications,
  deleteJobApplication,
  countJobApplication,
} = require("../controllers/jobApplicationController");
const { uploadOneImageAndOnePDF, processImageAndPDF } = require("../middleware/uploadMiddleware");

const router = express.Router();

// Base routes
router.post("/", uploadOneImageAndOnePDF, processImageAndPDF, createJobApplication); // Changed to separate middleware
router.get("/", getJobApplications);

// Count route
router.get("/count", countJobApplication);

// Routes with ID parameter
router.delete("/:id", deleteJobApplication);

module.exports = router;