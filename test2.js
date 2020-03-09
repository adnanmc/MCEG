// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const { adhoc16Schema } = require("./utils/eventValidator");

let body = {
  stg: "stg1",
  flightNum: "0055",
  utcOriginDate: "20170812",
  origin: "JFK",
  destination: "BOS",
  stdUTC: "1234",
  staUTC: "1345",
  nextDayCrossover: false,
  tailNum: "245",
  eventType: "NEW"
};

console.log(adhoc16Schema.validate(body));
