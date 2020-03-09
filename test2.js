// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const { adhoc16Schema } = require("./utils/eventValidator");

let body = {
  stg: "stg4",
  flightNum: "0055",
  utcOriginDate: "20170812",
  origin: "jfk",
  destination: "bos",
  stdUTC: "1234",
  staUTC: "1345",
  nextDayCrossover: false,
  tailNum: "245",
  eventType: "NEW"
};

let validation = adhoc16Schema.validate(body, { abortEarly: false });
let error = validation.error;
if (error) {
  console.log(error.details[0].message);
} else {
  console.log("success");
}
