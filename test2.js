// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const airportFile = require("./utils/airportData.json");

const airportCodesArray = airportFile.forEach(element => {
  console.log(element);
});
