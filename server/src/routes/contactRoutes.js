const express = require("express");
const {
  createContact,
  getContact,
  deleteContact,
  countContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/").post(createContact).get(getContact);
router.route("/count").get(countContact);

router.route("/:id").delete(deleteContact)

module.exports = router;
