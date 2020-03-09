const joi = require("@hapi/joi");
const airportDataFile = require("./airportData.json");
const airportCodesArray = [];
airportDataFile.forEach(element => {
  airportCodesArray.push(element.IATA);
});
const allowedEvents = [
  "OUT",
  "OFF",
  "ON",
  "IN",
  "ETD",
  "ETA",
  "ETO",
  "EON",
  "SUB",
  "CNL",
  "RIN",
  "DEL",
  "GTD",
  "GTA",
  "ASN",
  "REM",
  "UDD",
  "UDA",
  "RMD",
  "RMA",
  "GRD",
  "AIR",
  "DVC",
  "NEW"
];
const adhoc16Schema = joi.object({
  stg: joi
    .string()
    .trim()
    .required()
    .pattern(/^stg[1-3]$/)
    .error(new Error("stg must be stg1 or stg2 or stg3")),
  flightNum: joi
    .string()
    .trim()
    .required()
    .pattern(/^\d{3}[1-9]$/)
    .error(new Error("flightNum must be 4 digit. Ex: 0024")),
  utcOriginDate: joi
    .string()
    .trim()
    .required()
    .pattern(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/)
    .error(new Error("utcOriginDate must be in the format YYYYMMDD")),
  origin: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...airportCodesArray)
    .error(new Error("origin must be a valid airport code")),
  destination: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...airportCodesArray)
    .error(new Error("destination must be a valid airport code")),
  stdUTC: joi
    .string()
    .trim()
    .required()
    .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
    .error(new Error("stdUTC must be HHMM in 24hour format. Ex: 0059, 1523")),
  staUTC: joi.when("eventType", {
    is: "NEW",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("staUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  eventType: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...allowedEvents)
    .error(new Error(`eventType must be one of: ${allowedEvents}`)),
  outUTC: joi.when("eventType", {
    is: "OUT",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("outUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  offUTC: joi.when("eventType", {
    is: "OFF",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("offUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  onUTC: joi.when("eventType", {
    is: "ON",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("onUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  inUTC: joi.when("eventType", {
    is: "IN",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("inUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  etdUTC: joi.when("eventType", {
    is: "ETD",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("etdUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  etaUTC: joi.when("eventType", {
    is: "ETA",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("etaUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  etaUTC: joi.when("eventType", {
    is: "DVC",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("etaUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  etoUTC: joi.when("eventType", {
    is: "ETO",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("etoUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  eonUTC: joi.when("eventType", {
    is: "EON",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .error(new Error("etoUTC must be HHMM in 24hour format. Ex: 0059, 1523"))
  }),
  tailNum: joi.when("eventType", {
    is: "SUB",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^[1-9]\d{2,3}$/)
      .error(new Error("tailNum must be 4 digit. Ex: 0548"))
  }),
  tailNum: joi.when("eventType", {
    is: "ASN",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^[1-9]\d{2,3}$/)
      .error(new Error("tailNum must be 4 digit. Ex: 0548"))
  }),
  tailNum: joi.when("eventType", {
    is: "NEW",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^[1-9]\d{2,3}$/)
      .error(new Error("tailNum must be 4 digit. Ex: 0548"))
  }),
  depGate: joi.when("eventType", {
    is: "GTD",
    then: joi
      .string()
      .required()
      .trim()
      .uppercase()
      .regex(/^([a-zA-Z0-9]){1,4}$/)
      .error(new Error("depGate must minimum 1 char max 4 char. Ex: 02A"))
  }),
  arrGate: joi.when("eventType", {
    is: "GTA",
    then: joi
      .string()
      .required()
      .trim()
      .uppercase()
      .regex(/^([a-zA-Z0-9]){1,4}$/)
      .error(new Error("arrGate must minimum 1 char max 4 char. Ex: 01B"))
  }),
  divertCity: joi.when("eventType", {
    is: "DVC",
    then: joi
      .string()
      .trim()
      .required()
      .uppercase()
      .valid(...airportCodesArray)
      .error(new Error("divertCity must be a valid airport code"))
  }),
  nextDayCrossover: joi.when("eventType", {
    is: "NEW",
    then: joi
      .boolean()
      .required()
      .error(new Error("nextDayCrossover must be true or false"))
  })
});

module.exports = {
  adhoc16Schema
};
