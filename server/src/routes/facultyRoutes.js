const express = require("express");
const {
  createFaculty,
  getFaculty,
  deleteFaculty,
  updateFaculty,
} = require("../controllers/facultyController"); 
const { upload, processUpload } = require("../middleware/uploadMiddleware");

const router = express.Router();

// Base routes
router.post("/", upload, processUpload, createFaculty); // Changed to separate middleware
router.get("/", getFaculty);

// Routes with ID parameter
router.delete("/:id", deleteFaculty);
router.patch("/:id", upload, processUpload, updateFaculty);

module.exports = router;