// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = 'srt4';
// let result = stgRegex.test(stg);
// console.log(result);
const fs = require("fs");
const airporFile = "./utils/airportData.json";
let fileData;
fs.readFile(airporFile, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    fileData = JSON.stringify(data);
  }
});
// const airportDataJson = JSON.parse(fileData);

// let airportCodeArray = airportDataJson.forEach(element => {
//   return element["IATA-code"];
// });

console.log(fileData);
