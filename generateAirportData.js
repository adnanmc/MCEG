const axios = require("axios");
const fs = require("fs");
const v = require("voca");
const openFlightDataURL =
  "https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat";
axios.get(openFlightDataURL).then(res => {
  let rawText = new Array(res.data.split("\n"));
  let data = [];
  let airportCodes = [];
  // console.log(rawText[0]);

  rawText[0].forEach(row => {
    // console.log(row.toString().split(","));
    let rawRowData = row.toString().split(",");
    // console.log(rawRowData[0]);

    let tempObject = {};
    tempObject["airportId"] = v(rawRowData[0]).trim('"');
    tempObject["name"] = v(rawRowData[1]).trim('"');
    tempObject["city"] = v(rawRowData[2]).trim('"');
    tempObject["country"] = v(rawRowData[3]).trim('"');
    tempObject["IATA-code"] = v(rawRowData[4]).trim('"');
    tempObject["ICAO-code"] = v(rawRowData[5]).trim('"');
    tempObject["latitude"] = v(rawRowData[6]).trim('"');
    tempObject["longitude"] = v(rawRowData[7]).trim('"');
    tempObject["altitude"] = v(rawRowData[8]).trim('"');
    tempObject["timezone"] = v(rawRowData[9]).trim('"');
    tempObject["DST"] = v(rawRowData[10]).trim('"');
    tempObject["tz-database-time-zone"] = v(rawRowData[11]).trim('"');
    tempObject["type"] = v(rawRowData[12]).trim('"');
    tempObject["source"] = v(rawRowData[13]).trim('"');
    data.push(tempObject);
    if (!v(tempObject["IATA-code"]).matches(/\\\\N/)) {
      airportCodes.push(tempObject["IATA-code"]);
    }
  });
  let allDataFileName = "./utils/airportData.json";
  let allAirportCodeFileName = "./utils/airportCodes.json";
  let finalData = JSON.stringify(data);
  let finalAirportCodes = JSON.stringify(airportCodes);
  fs.writeFile(allDataFileName, finalData, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File: ${allDataFileName} has been saved`);
    }
  });
  fs.writeFile(allAirportCodeFileName, finalAirportCodes, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File: ${allAirportCodeFileName} has been saved`);
    }
  });
});
