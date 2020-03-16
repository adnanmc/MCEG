const express = require("express");
const router = express.Router();
const {
  getAllFlights,
  getSingleFlight,
  insertAllFlights,
  deleteAllFlights
} = require("../controllers/flights.controller");

router
  .route("/")
  .get(getAllFlights)
  .post(insertAllFlights)
  .delete(deleteAllFlights);

router.route("/:flightNum").get(getSingleFlight);

module.exports = router;
