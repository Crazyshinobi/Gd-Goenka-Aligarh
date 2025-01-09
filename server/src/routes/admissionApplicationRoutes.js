const express = require("express");
const {
  createAdmissionApplication,
} = require("../controllers/admissionApplicationController");
const router = express.Router();

router.route("/").post(createAdmissionApplication);

module.exports = router;
