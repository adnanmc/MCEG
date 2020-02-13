const moment = require("moment");
const fs = require("fs-extra");
const v = require("voca");

// getting network share file drop location from mceg-config.json
let networkFolders = require("../config/config.json");
const stg1DropLocation = networkFolders["stg1"]["send"];
const stg2DropLocation = networkFolders["stg2"]["send"];
const stg3DropLocation = networkFolders["stg2"]["send"];

/////////////////////////////////////////////////////////////////////
//////////////////////////// Utility functions //////////////////////
/////////////////////////////////////////////////////////////////////

// validate date
exports.validateDate = value => {
  return moment(value, "YYYYMMDD", true).isValid();
};
// validate time
exports.validateTime = value => {
  return (x = moment(value, "HHmm", true).isValid());
};

// create file name
exports.createFileName = eventName => {
  let now = moment(new Date()).format("MM_DD_YYYY_HH_mm_ss_x");
  let fileName = `mceg_adhoc16_${eventName}_${now}`;
  return fileName;
};

// set the sendfolder regex: /^stg[1-3]$/
exports.getSendFolder = stg => {
  stg = v(stg).upperCase();
  if (stg == "STG1") {
    sendfolder = stg1DropLocation;
  } else if (stg == "STG2") {
    sendfolder = stg2DropLocation;
  } else if (stg == "STG3") {
    sendfolder = stg3DropLocation;
  }
  return sendfolder;
};

// sending request file to adhoc processor
exports.sendAdhocFile = async (sendfolder, fileName, adhocString) => {
  await fs.writeFile(`${sendfolder}/${fileName}.txt`, adhocString).then(err => {
    if (err) {
      return {
        error: `Error sending File: ${fileName}.txt with string: ${adhocString} Failed!!`
      };
    } else {
      return {
        message: `File: ${fileName}.txt sent with string: ${adhocString}`
      };
    }
  });
};

// validate baseline of adhoc request

exports.adhocMainValidate = body => {
  let stg = v(body.stg)
    .trim()
    .upperCase();
  let flightNum = v(body.flightNum)
    .trim()
    .padLeft(4, "0");
  let utcOriginDate = v(body.utcOriginDate).trim();
  let dateValidation = this.validateDate(utcOriginDate);
  let origin = v(body.origin)
    .trim()
    .upperCase();
  let destination = v(body.destination)
    .trim()
    .upperCase();
  let stdUTC = v(body.stdUTC)
    .trim()
    .padLeft(4, "0");
  let validateSTD = validateTime(stdUTC);

  let error;
  if (
    (stg != "STG1" && stg != "STG2" && stg != "STG3") ||
    body.stg == "" ||
    body.stg == null
  ) {
    errors = "stg must be stg1 or stg2 or stg3";
  } else if (
    v(flightNum).count() != 4 ||
    v(flightNum).isNumeric() == false ||
    body.flightNum == "" ||
    body.flightNum == null
  ) {
    error = "flightNum must be number minimum 1 and maximum 4 digit.";
  } else if (
    dateValidation.isValid() == false ||
    body.utcOriginDate == "" ||
    body.utcOriginDate == null
  ) {
    error = "utcOriginDate must be in the format YYYYMMDD.";
  } else if (
    v(origin).count() != 3 ||
    v(origin).isAlpha() == false ||
    body.origin == "" ||
    body.origin == null
  ) {
    error = "origin must be airport code EX: JFK";
  } else if (
    v(destination).count() != 3 ||
    v(destination).isAlpha() == false ||
    body.destination == "" ||
    body.destination == null
  ) {
    error = "destination must be airport code EX: JFK";
  } else if (
    v.count(stdUTC) != 4 ||
    isNaN(stdUTC) ||
    validateSTD == false ||
    body.stdUTC == "" ||
    body.stdUTC == null
  ) {
    error =
      "stdUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (error) {
    return error;
  } else {
    return `ADH016_${flightNum}${utcOriginDate}${origin}${destination}`
  }
};
