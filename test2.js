// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const v = require("voca");
const { adhoc16Schema } = require("./utils/eventValidator");

let body = {
  flightNum: "0055",
  utcOriginDate: "20200312",
  origin: "jfk",
  destination: "bos",
  stdUTC: "1234",
  staUTC: "0545",
  nextDayCrossover: true,
  tailNum: "288",
  eventType: "new"
};

let validation = adhoc16Schema.validate(body, { abortEarly: false });
let error = validation.error;
if (error) {
  console.log(v(error.details[0].message).replaceAll('"', "'"));
} else {
  console.log("success");
  console.log(validation.value);
}
