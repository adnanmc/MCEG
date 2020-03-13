const mongoose = require("mongoose");

// flight schema based on csv being received via adhoc processor ADH004 request
const flightSchema = mongoose.Schema({
  // csv column name: airlineCode
  airlineCode: {
    type: String,
    default: "B6 JBU"
  },

  // csv column name: identifier
  flightNumber: {
    type: String,
    required: [true, "flightNumber is required"],
    trim: true,
    maxlength: 4,
    validate: [
      /^\d{3}[1-9]$/,
      "flightNumber must be padded with zero to keep 4 digit"
    ],
    default: ""
  },
  sequence: {
    type: String,
    required: [true, "sequence is required"],
    trim: true,
    maxlength: 4,
    default: ""
  },
  localOriginDate: {
    type: String,
    required: [true, "localOriginDate is required"],
    trim: true,
    validate: [
      /([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/,
      "localOriginDate must be YYYYMMDD"
    ],
    default: ""
  },
  utcOriginDate: {
    type: String,
    required: [true, "utcOriginDate is required"],
    trim: true,
    validate: [
      /([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/,
      "utcOriginDate must be YYYYMMDD"
    ],
    default: ""
  },
  utcScheduledDepTime: {
    type: String,
    required: [true, "utcScheduledDepTime is required"],
    trim: true,
    validate: [
      /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
      "utcScheduledDepTime must be padded with zero to keep 4 digit"
    ],
    maxlength: 4,
    default: ""
  },
  utcScheduledArrTime: {
    type: String,
    required: [true, "utcScheduledArrTime is required"],
    trim: true,
    validate: [
      /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
      "utcScheduledArrTime must be padded with zero to keep 4 digit"
    ],
    maxlength: 4,
    default: ""
  },
  localScheduledDepTime: {
    type: String,
    required: [true, "localScheduledDepTime is required"],
    trim: true,
    validate: [
      /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
      "localScheduledDepTime must be padded with zero to keep 4 digit"
    ],
    maxlength: 4,
    default: ""
  },
  localScheduledArrTime: {
    type: String,
    required: [true, "localScheduledArrTime is required"],
    trim: true,
    validate: [
      /^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/,
      "localScheduledArrTime must be padded with zero to keep 4 digit"
    ],
    maxlength: 4,
    default: ""
  },
  scheduledDepUtcOffset: {
    type: String,
    trim: true,
    default: ""
  },
  scheduledArrUtcOffset: {
    type: String,
    trim: true,
    default: ""
  },
  tailNumber: {
    type: String,
    required: [true, "tailNumber is required"],
    trim: true,
    default: ""
  },
  previousTailNumber: {
    type: String,
    trim: true,
    default: ""
  },
  tailNumBeforeCancel: {
    type: String,
    trim: true,
    default: ""
  },
  origin: {
    type: String,
    required: [true, "origin is required"],
    trim: true,
    uppercase: true,
    minlength: 3,
    maxlength: 3,
    default: ""
  },
  destination: {
    type: String,
    required: [true, "destination is required"],
    trim: true,
    uppercase: true,
    minlength: 3,
    maxlength: 3,
    default: ""
  },
  OAGEquipmentType: {
    type: String,
    trim: true,
    default: ""
  },
  SchedOAGEquipType: {
    type: String,
    trim: true,
    default: ""
  },
  OAGEquipSubType: {
    type: String,
    trim: true,
    default: ""
  },
  departureGate: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  arrivalGate: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  localEstimatedDepTime: {
    type: String,
    required: [true, "localEstimatedDepTime is required"],
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcEstimatedDepTime: {
    type: String,
    required: [true, "utcEstimatedDepTime is required"],
    trim: true,
    maxlength: 4,
    default: ""
  },
  localEstimatedArrTime: {
    type: String,
    required: [true, "localEstimatedArrTime is required"],
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcEstimatedArrTime: {
    type: String,
    required: [true, "utcEstimatedArrTime is required"],
    trim: true,
    maxlength: 4,
    default: ""
  },
  actualDeparture: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  actualArrival: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcOUT: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcOFF: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcON: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcIN: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcETO: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  utcEON: {
    type: String,
    trim: true,
    maxlength: 4,
    default: ""
  },
  newDepartureCity: {
    type: String,
    trim: true,
    uppercase: true,
    minlength: 3,
    maxlength: 3,
    default: "NNN"
  },
  newArrivalCity: {
    type: String,
    trim: true,
    uppercase: true,
    minlength: 3,
    maxlength: 3,
    default: "NNN"
  },
  fsDailyId: {
    type: String,
    trim: true,
    maxlength: 10,
    default: ""
  },
  nextFlightOnThisTailNum: {
    type: String,
    trim: true,
    default: ""
  }
});

// pad flight number and time values with zeroes to maintain 4 digit
// pad fsDailyId with zeros to maintain 10 digit
flightSchema.pre("validate", function(next) {
  this.flightNumber = this.flightNumber.padStart(4, "0");
  this.utcScheduledDepTime = this.utcScheduledDepTime.padStart(4, "0");
  this.utcScheduledArrTime = this.utcScheduledArrTime.padStart(4, "0");
  this.localScheduledDepTime = this.localScheduledDepTime.padStart(4, "0");
  this.localScheduledArrTime = this.localScheduledArrTime.padStart(4, "0");
  this.utcEstimatedDepTime = this.utcEstimatedDepTime.padStart(4, "0");
  this.utcEstimatedArrTime = this.utcEstimatedArrTime.padStart(4, "0");
  this.localEstimatedDepTime = this.localEstimatedDepTime.padStart(4, "0");
  this.localEstimatedArrTime = this.localEstimatedArrTime.padStart(4, "0");

  this.fsDailyId = this.fsDailyId.padStart(10, "0");
  if (this.utcOUT !== "") {
    this.utcOUT = this.utcOUT.padStart(4, "0");
  }
  if (this.utcOFF !== "") {
    this.utcOFF = this.utcOFF.padStart(4, "0");
  }
  if (this.utcON !== "") {
    this.utcON = this.utcON.padStart(4, "0");
  }
  if (this.utcIN !== "") {
    this.utcIN = this.utcIN.padStart(4, "0");
  }
  if (this.utcETO !== "") {
    this.utcETO = this.utcETO.padStart(4, "0");
  }
  if (this.utcEON !== "") {
    this.utcEON = this.utcEON.padStart(4, "0");
  }
  next();
});

module.exports = flightSchema;
