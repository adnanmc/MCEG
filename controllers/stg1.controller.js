const {
  STG1D0,
  STG1D1,
  STG1D2,
  STG1D3,
  STG1D4,
  STG1D5,
  STG1D6,
  STG1D7
} = require("../models/mvt.model");

// ===============================================================================================
// ------------------------------------------ Only D0 --------------------------------------------
// ===============================================================================================

// @desc        get all flight data
// @route       get /api/v1/stg1/d0
// @access      Public

exports.getAllFlights = async (req, res, next) => {
  try {
    const flightData = await STG1D0.find();
    res
      .status(200)
      .json({ success: true, count: flightData.length, data: flightData });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        search by flightNum
// @route       get /api/v1/stg1/d0/:flightNum
// @access      Public

exports.getSingleFlight = async (req, res, next) => {
  try {
    const flightData = await STG1D0.find({
      flightNumber: req.params.flightNum
    });
    res
      .status(200)
      .json({ success: true, count: flightData.length, data: flightData });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc        insert many flights
// @route       POST /api/v1/stg1/d0
// @access      Public
exports.insertAllFlights = async (req, res, next) => {
  try {
    const flightData = await STG1D0.insertMany(req.body);
    res.status(201).json({ success: true, flightData });
  } catch (err) {
    res.status(400).json({
      success: false
    });
  }
};

// @desc        delete all flight data for a day
// @route       DELETE /api/v1/stg1/d0
// @access      Public

exports.deleteAllFlights = async (req, res, next) => {
  try {
    const flightData = await STG1D0.deleteMany();
    if (!flightData) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: flightData });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// ===============================================================================================
// ------------------------------------------ Only D1 --------------------------------------------
// ===============================================================================================
