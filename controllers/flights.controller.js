const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { getFlight, getFlights } = require("../utils/flightData");
const {
  STG1D0,
  STG2D0,
  STG3D0,
  STG1D1,
  STG2D1,
  STG3D1,
  STG1D2,
  STG2D2,
  STG3D2,
  STG1D3,
  STG2D3,
  STG3D3,
  STG1D4,
  STG2D4,
  STG3D4,
  STG1D5,
  STG2D5,
  STG3D5,
  STG1D6,
  STG2D6,
  STG3D6,
  STG1D7,
  STG2D7,
  STG3D7
} = require("../models/flightData.model");

// ===============================================================================================
// ------------------------------------------ Only D0 --------------------------------------------
// ===============================================================================================

// @desc        get all flight data
// @route       get /api/v1/flights/:stg/:day
// @access      Public

exports.getAllFlights = asyncHandler(async (req, res, next) => {
  const { errorResponse, flightData } = await getFlights(
    req.params.stg,
    req.params.day
  );
  if (errorResponse) {
    return next(errorResponse);
  }
  res
    .status(200)
    .json({ success: true, count: flightData.length, data: flightData });
});

// @desc        search by flightNum
// @route       get /api/v1/stg1/d0/:flightNum
// @access      Public

exports.getSingleFlight = asyncHandler(async (req, res, next) => {
  const { errorResponse, flightData } = await getFlight(
    req.params.stg,
    req.params.day,
    req.params.flightNumber
  );
  if (errorResponse) {
    return next(errorResponse);
  }
  res
    .status(200)
    .json({ success: true, count: flightData.length, data: flightData });
});

// @desc        insert many flights
// @route       POST /api/v1/stg1/d0
// @access      Public
exports.insertAllFlights = asyncHandler(async (req, res, next) => {
  const flightData = await STG1D0.insertMany(req.body);
  res.status(201).json({ success: true, flightData });
});

// @desc        delete all flight data for a day
// @route       DELETE /api/v1/stg1/d0
// @access      Public

exports.deleteAllFlights = asyncHandler(async (req, res, next) => {
  const flightData = await STG1D0.deleteMany();
  res.status(200).json({ success: true, data: flightData });
});

// ===============================================================================================
// ------------------------------------------ Only D1 --------------------------------------------
// ===============================================================================================
