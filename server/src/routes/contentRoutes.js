const express = require("express");
const {
  createContent,
  getContent,
  deleteContent,
  getSingleContent,
  updateContent,
  countContent,
} = require("../controllers/contentController");
const { uploadMultiple } = require("../middleware/uploadMiddleware");

const router = express.Router();

router.route("/").post(uploadMultiple, createContent).get(getContent);
router.route("/count").get(countContent);
router.route("/:id").delete(deleteContent).get(getSingleContent).patch(uploadMultiple, updateContent);

module.exports = router;
