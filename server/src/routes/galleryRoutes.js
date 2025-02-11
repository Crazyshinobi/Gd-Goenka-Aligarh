const express = require("express");
const {
  createGallery,
  getGallery,
  deleteGallery,
  updateGallery,
  getSingleGallery,
  countGallery,
} = require("../controllers/galleryController");
const { upload, processUpload } = require("../middleware/uploadMiddleware");

const router = express.Router();

// Base routes
router.post("/", upload, processUpload, createGallery); // Changed to separate middleware
router.get("/", getGallery);

// Count route
router.get("/count", countGallery);

// Routes with ID parameter
router.delete("/:id", deleteGallery);
router.patch("/:id", upload, processUpload, updateGallery);
router.get("/:id", getSingleGallery);

module.exports = router;