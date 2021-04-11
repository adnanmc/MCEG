const express = require("express");
const router = express.Router();
const {
  getAllFlights,
  getSingleFlight,
  insertAllFlights,
  deleteAllFlights
} = require("../controllers/flights.controller");

router
  .route("/:stg/:day")
  .get(getAllFlights)
  .post(insertAllFlights)
  .delete(deleteAllFlights);

router.route("/:stg/:day/:flightNumber").get(getSingleFlight);

module.exports = router;
