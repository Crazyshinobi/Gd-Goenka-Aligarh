const express = require("express");
const {
  createAdmissionEnquiry,
  getAdmissionEnquiry,
  deleteAdmissionEnquiry,
  countAdmissionEnquiry,
} = require("../controllers/admissionEnquiryController");

const router = express.Router();

router.route("/").post(createAdmissionEnquiry).get(getAdmissionEnquiry);
router.route("/count").get(countAdmissionEnquiry);

router.route("/:id").delete(deleteAdmissionEnquiry)

module.exports = router;
