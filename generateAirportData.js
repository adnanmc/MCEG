const axios = require("axios");
const fs = require("fs");
const v = require("voca");
const openFlightDataURL =
  "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat";
axios.get(openFlightDataURL).then(res => {
  let rawText = new Array(res.data.split("\n"));
  let data = [];
  rawText[0].forEach(row => {
    let rawRowData = row.toString().split(",");
    let tempObject = {};
    tempObject["airportId"] = v(rawRowData[0]).trim('"');
    tempObject["name"] = v(rawRowData[1]).trim('"');
    tempObject["city"] = v(rawRowData[2]).trim('"');
    tempObject["country"] = v(rawRowData[3]).trim('"');
    tempObject["IATA"] = v(rawRowData[4]).trim('"');
    tempObject["ICAO"] = v(rawRowData[5]).trim('"');
    tempObject["latitude"] = v(rawRowData[6]).trim('"');
    tempObject["longitude"] = v(rawRowData[7]).trim('"');
    tempObject["altitude"] = v(rawRowData[8]).trim('"');
    tempObject["timezone"] = v(rawRowData[9]).trim('"');
    tempObject["DST"] = v(rawRowData[10]).trim('"');
    tempObject["tzOlson"] = v(rawRowData[11]).trim('"');
    tempObject["type"] = v(rawRowData[12]).trim('"');
    tempObject["source"] = v(rawRowData[13]).trim('"');
    data.push(tempObject);
  });
  let allDataFileName = "./utils/airportData.json";
  let finalData = JSON.stringify(data);
  fs.writeFile(allDataFileName, finalData, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File: ${allDataFileName} has been saved`);
    }
  });
});
