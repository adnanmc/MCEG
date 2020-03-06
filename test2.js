// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const airportDataFile = require("./utils/airportData.json");

const airportCodesArray = [];
airportDataFile.forEach(element => {
  airportCodesArray.push(element.IATA);
});

console.log(airportCodesArray);
