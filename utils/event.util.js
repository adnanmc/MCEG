const v = require("voca");
const { sendAdhocFile } = require("./common.util");

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

    case "OFF":
      let offUTC = v(data.offUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}9999${offUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ON":
      let onUTC = v(data.onUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}_${onUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "IN":
      let inUTC = v(data.inUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}_9999${inUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    default:
      break;
  }
};

module.exports = {
  sendAdhoc16
};
