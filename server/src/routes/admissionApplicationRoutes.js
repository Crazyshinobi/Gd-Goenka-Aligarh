const express = require("express");
const {
  createAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
} = require("../controllers/admissionApplicationController");
const router = express.Router();

router.route("/").post(createAdmissionApplication).get(getAdmissionApplication);
router.route("/:id").delete(deleteAdmissionApplication);

module.exports = router;
