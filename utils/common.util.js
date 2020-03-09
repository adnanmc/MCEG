const moment = require("moment");
const fs = require("fs-extra");
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

module.exports = {
  validateDate,
  validateTime,
  getSendFolder,
  sendAdhocFile
};
