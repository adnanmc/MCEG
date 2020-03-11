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

    case "ETD":
      let etdUTC = v(data.etdUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}${etdUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ETA":
      let etaUTC = v(data.etaUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}${etaUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ETO":
      let etoUTC = v(data.etoUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}${etoUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "EON":
      let eonUTC = v(data.eonUTC).padLeft(4, "0");
      let adhocString = `${adhoc16BaseString}${eventType}${eonUTC}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "SUB":
      let tailNum = v(data.tailNum).padLeft(4, " ");
      let adhocString = `${adhoc16BaseString}${eventType}${tailNum}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ASN":
      let tailNum = v(data.tailNum).padLeft(4, " ");
      let adhocString = `${adhoc16BaseString}${eventType}${tailNum}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GTD":
      let depGate = v(data.depGate).padLeft(4, " ");
      let adhocString = `${adhoc16BaseString}${eventType}${depGate}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GTA":
      let depGate = v(data.depGate).padLeft(4, " ");
      let adhocString = `${adhoc16BaseString}${eventType}${depGate}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "DVC":
      let etaUTC = v(data.etaUTC).padLeft(4, "0");
      let divertCity = data.divertCity;
      let adhocString = `${adhoc16BaseString}${eventType}${etaUTC}${divertCity}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RIN":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "REM":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "UDD":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "UDA":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RMD":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RMA":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GRD":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "AIR":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "CNL":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "DEL":
      let adhocString = `${adhoc16BaseString}${eventType}`;
      let fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    default:
      break;
  }
};

module.exports = {
  sendAdhoc16
};
