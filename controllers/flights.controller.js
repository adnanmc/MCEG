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
// @route       get /api/v1/:stg/:day
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
    let flightNumber = new String(req.params.flightNumber)
      .trim()
      .padStart(4, "0");
    const flightData = await STG1D0.find({
      flightNumber: flightNumber
    });
    res
      .status(200)
      .json({ success: true, count: flightData.length, data: flightData });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
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
    console.log(err);

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
