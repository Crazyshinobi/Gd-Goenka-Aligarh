const express = require("express");
const {
  createAdmission,
  getAdmission,
  deleteAdmission,
  countAdmission,
} = require("../controllers/admissionController");

const router = express.Router();

router.route("/").post(createAdmission).get(getAdmission);
router.route("/count").get(countAdmission);
router.route("/:id").delete(deleteAdmission);

module.exports = router;
