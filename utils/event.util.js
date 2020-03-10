const v = require("voca");
const { getSendFolder, sendAdhocFile } = require("./common.util");

const sendAdhoc16 = async data => {
  let eventType = data.eventType;
  let stg = data.stg;
  let flightNum = v(data.flightNum).padLeft(4, "0");
  let utcOriginDate = data.utcOriginDate;
  let origin = data.origin;
  let destination = data.destination;
  let stdUTC = v(data.stdUTC).padLeft(4, "0");
  let adhoc16BaseString = `ADH016${flightNum}${utcOriginDate}${origin}${destination}${stdUTC}`;
  switch (eventType) {
    case "OUT":
      let outUTC = v(data.outUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}${outUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    default:
      break;
  }
};

module.exports = {
  sendAdhoc16
};
