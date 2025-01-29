const express = require("express");
const {
  createAdmissionApplication,
  getAdmissionApplication,
  deleteAdmissionApplication,
  countAdmissionApplication,
  checkUserhaveSubmitted,
  checkUserhaveSubmittedAndPaid,
} = require("../controllers/admissionApplicationController");
const router = express.Router();

router.route("/").post(createAdmissionApplication).get(getAdmissionApplication);
router.route("/check-user-paid/:id").get(checkUserhaveSubmittedAndPaid);
router.route("/check-user/:id").get(checkUserhaveSubmitted);
router.route("/count").get(countAdmissionApplication);
router.route("/:id").delete(deleteAdmissionApplication);

module.exports = router;
