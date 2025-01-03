const express = require("express");
const {
  createGallery,
  getGallery,
  deleteGallery,
  updateGallery,
  getSingleGallery,
  countGallery,
} = require("../controllers/galleryController");
const { upload } = require("../middleware/uploadMiddleware");

const router = express.Router();

router.route("/").post(upload, createGallery).get(getGallery);
router.route("/count").get(countGallery);

router
  .route("/:id")
  .delete(deleteGallery)
  .patch(upload, updateGallery)
  .get(getSingleGallery);

module.exports = router;
