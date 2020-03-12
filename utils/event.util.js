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
  let outUTC;
  let offUTC;
  let onUTC;
  let inUTC;
  let etdUTC;
  let etaUTC;
  let etoUTC;
  let eonUTC;
  let tailNum;
  let depGate;
  let arrGate;
  let divertCity;
  let staUTC;
  let nextDayCrossover;
  let adhocString;
  let fileStatus;
  switch (eventType) {
    case "OUT":
      outUTC = v(data.outUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}${outUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "OFF":
      offUTC = v(data.offUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}9999${offUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ON":
      onUTC = v(data.onUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}_${onUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "IN":
      inUTC = v(data.inUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}_9999${inUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ETD":
      etdUTC = v(data.etdUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}${etdUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ETA":
      etaUTC = v(data.etaUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}${etaUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ETO":
      etoUTC = v(data.etoUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}${etoUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "EON":
      eonUTC = v(data.eonUTC).padLeft(4, "0");
      adhocString = `${adhoc16BaseString}${eventType}${eonUTC}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "SUB":
      tailNum = v(data.tailNum).padLeft(4, " ");
      adhocString = `${adhoc16BaseString}${eventType}${tailNum}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "ASN":
      tailNum = v(data.tailNum).padLeft(4, " ");
      adhocString = `${adhoc16BaseString}${eventType}${tailNum}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GTD":
      depGate = v(data.depGate).padLeft(4, " ");
      adhocString = `${adhoc16BaseString}${eventType}${depGate}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GTA":
      arrGate = v(data.arrGate).padLeft(4, " ");
      adhocString = `${adhoc16BaseString}${eventType}${arrGate}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "DVC":
      etaUTC = v(data.etaUTC).padLeft(4, "0");
      divertCity = data.divertCity;
      adhocString = `${adhoc16BaseString}${eventType}${etaUTC}${divertCity}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "NEW":
      staUTC = v(data.staUTC).padLeft(4, "0");
      nextDayCrossover = "0";
      if (data.nextDayCrossover === true) {
        nextDayCrossover = "1";
      }
      tailNum = v(data.tailNum).padLeft(4, " ");
      adhocString = `${adhoc16BaseString}${eventType}${staUTC}${nextDayCrossover}${tailNum}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RIN":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "REM":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "UDD":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "UDA":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RMD":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "RMA":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "GRD":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "AIR":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "CNL":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    case "DEL":
      adhocString = `${adhoc16BaseString}${eventType}`;
      fileStatus = await sendAdhocFile(stg, eventType, adhocString);
      return fileStatus;

    default:
      break;
  }
};

module.exports = {
  sendAdhoc16
};
