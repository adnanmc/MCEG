const express = require("express");
const router = express.Router();
const { postEvent } = require("../controllers/event.controller");

router.route("/").post(postEvent);

module.exports = router;
