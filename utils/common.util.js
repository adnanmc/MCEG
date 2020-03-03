const moment = require("moment");
const fs = require("fs-extra");
const expressValidator = require("express-validator");
const v = require("voca");

// getting network share file drop location from mceg-config.json
let networkFolders;
if (process.env.ENV == "prod") {
  networkFolders = require("../config/prod.config.json");
} else {
  networkFolders = require("../config/dev.config.json");
}
const stg1DropLocation = networkFolders["stg1"]["send"];
const stg2DropLocation = networkFolders["stg2"]["send"];
const stg3DropLocation = networkFolders["stg2"]["send"];

/////////////////////////////////////////////////////////////////////
//////////////////////////// Utility functions //////////////////////
/////////////////////////////////////////////////////////////////////

// validate date
const validateDate = value => {
  return moment(value, "YYYYMMDD", true).isValid();
};
// validate time
const validateTime = value => {
  return moment(value, "HHmm", true).isValid();
};

// set the sendFolder regex: /^stg[1-3]$/
const getSendFolder = stg => {
  stg = v(stg).upperCase();
  if (stg == "STG1") {
    sendFolder = stg1DropLocation;
  } else if (stg == "STG2") {
    sendFolder = stg2DropLocation;
  } else if (stg == "STG3") {
    sendFolder = stg3DropLocation;
  }
  return sendFolder;
};

// sending request file to adhoc processor
const sendAdhocFile = async (sendFolder, eventName, adhocString) => {
  return new Promise((resolve, reject) => {
    let now = moment(new Date()).format("MM_DD_YYYY_HH_mm_ss_x");
    let fileName = `mceg_adhoc16_${eventName}_${now}`;
    fs.writeFile(`${sendFolder}/${fileName}.txt`, adhocString).then(err => {
      if (err) {
        reject({
          error: `Error sending File: ${fileName}.txt with string: ${adhocString} Failed!!`
        });
      } else {
        resolve({
          message: `File: ${fileName}.txt sent with string: ${adhocString}`
        });
      }
    });
  });
};

// validate stage
const validateStage = body => {
  const regex = RegExp(/^stg[1-3]$/);
  let stg = v(body.stg)
    .trim()
    .upperCase();

  if (regex.test(stg)) {
    return {stg: stg};
  } else {
    return { error: "stg must be stg1 or stg2 or stg3" };
  }
};

// validate flightNum
const validateStage = body => {
  const regex = RegExp(/^\d{3}[1-9]$/);
  let flightNum = v(body.flightNum)
    .trim()
    .padLeft(4, "0");

  if (regex.test(flightNum)) {
    return {flightNum: flightNum};
  } else {
    return { error: "flightNum must be number minimum 1 and maximum 4 digit" };
  }
};

// validate utcOriginDate
const validateUTCOriginDate = body => {
  const regex = RegExp(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/)
  let utcOriginDate = v(body.utcOriginDate).trim();
  if (regex.test(utcOriginDate)) {
    return {utcOriginDate: utcOriginDate};
  } else {
    return { error: "utcOriginDate must be in the format YYYYMMDD" };
  }
}

// validate origin
const validateOrigin = body => {
  const regex = RegExp(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/)
  let utcOriginDate = v(body.utcOriginDate).trim();
  if (regex.test(utcOriginDate)) {
    return {utcOriginDate: utcOriginDate};
  } else {
    return { error: "utcOriginDate must be in the format YYYYMMDD" };
  }
}

// validate baseline of adhoc request
const adhocMainString = body => {
  // add any error to return
  let error;

  let flightNum = v(body.flightNum)
    .trim()
    .padLeft(4, "0");
  let utcOriginDate = v(body.utcOriginDate).trim();
  let dateValidation = validateDate(utcOriginDate);
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

  if (
    (stg != "STG1" && stg != "STG2" && stg != "STG3") ||
    body.stg == "" ||
    body.stg == null
  ) {
    error = "stg must be stg1 or stg2 or stg3";
  } else if (
    v(flightNum).count() != 4 ||
    v(flightNum).isNumeric() == false ||
    body.flightNum == "" ||
    body.flightNum == "0000" ||
    body.flightNum == null
  ) {
    error = "flightNum must be number minimum 1 and maximum 4 digit.";
  } else if (
    dateValidation == false ||
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
  switch (body.eventType) {
    // OUT event
    case "OUT":
      let outUTC = v(body.outUTC)
        .trim()
        .padLeft(4, "0");
      let validateOUT = validateTime(outUTC);

      if (
        v.count(outUTC) != 4 ||
        isNaN(outUTC) ||
        validateOUT == false ||
        body.outUTC == "" ||
        body.outUTC == null
      ) {
        error =
          "outUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
      }
      if (error) {
        return { error: error };
      } else {
        return {
          sendFolder: adhocBaseString.sendFolder,
          adhocOUTString: `${adhocBaseString.adhocBaseString}OUT${outUTC}`
        };
      }
    case "OFF":
      let outUTC = v(body.outUTC)
        .trim()
        .padLeft(4, "0");
      let validateOUT = validateTime(outUTC);

      if (
        v.count(outUTC) != 4 ||
        isNaN(outUTC) ||
        validateOUT == false ||
        body.outUTC == "" ||
        body.outUTC == null
      ) {
        error =
          "outUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
      }

      if (adhocBaseString.error) {
        return adhocBaseString;
      } else if (error) {
        return { error: error };
      } else {
        return {
          sendFolder: adhocBaseString.sendFolder,
          adhocOUTString: `${adhocBaseString.adhocBaseString}OUT${outUTC}`
        };
      }

    default:
      break;
  }

  if (error) {
    return { error: error };
  } else {
    let sendFolder = getSendFolder(stg);
    return {
      sendFolder: sendFolder,
      adhocBaseString: `ADH016_${flightNum}${utcOriginDate}${origin}${destination}${stdUTC}`
    };
  }
};

module.exports = {
  validateDate,
  validateTime,
  getSendFolder,
  sendAdhocFile,
  adhocMainString
};
