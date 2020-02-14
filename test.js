const fs = require("fs-extra");
const utils = require("./utils/common.util");
const moment = require("moment");
const csv = require('csv-parser');


// let stg = 'stg2';

// let dateToday = moment().format('DDMMMYY').toUpperCase();

// let adhocString = `ADH004_${dateToday}`;

// let fileName = utils.getFileName('adhoc4');

// let sendFolder = utils.getSendFolder(stg);

// let sendAdhocFile = utils.sendAdhocFile(sendFolder, fileName, adhocString);

// const path = './file.txt'

// try {
//   if (fs.existsSync(path)) {
//     //file exists
//   }
// } catch(err) {
//   console.error(err)
// }


const path = require('path');
let filePath = "./mceg_adhoc4.csv";

// var filePath = path.join(__dirname,'mceg_adhoc4.csv');

let jsonData = [];
let dataArray = [];
dataArray = fs.readFileSync(filePath, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log(err);
    }
    //The following line will split the csv file line by line and store each of it in the vraiable dataArray.
    var dataArray = data.split("\n");
    return dataArray
    
});

dataArray.forEach(element => { 
    console.log(element); 
  }); 




// console.log(jsonData);

// let results = [];
// const parseCSVFile = async () => await fs.createReadStream(filePath)
//   .pipe(csv(['recordStatus',
//   'lastDateModified',
//   'lastTimeModified',
//   'lastUserToModify',
//   'legDepartureDate',
//   'airlineCode',
//   'identifier',
//   'sequence',
//   'flightOriginDay',
//   'numericFlightDate',
//   'numGMTDate',
//   'STDudt',
//   'STAudt',
//   'tailNumber',
//   'numLastDateModified',
//   'flightStatus',
//   'origin',
//   'STDLocal',
//   'dispatchDesk',
//   'STDGMTVariance',
//   'destination',
//   'STALocal',
//   'STAGMTVariance',
//   'OAGEquipmentType',
//   'ACConfiguration',
//   'serviceType',
//   'originGate',
//   'ETDlocal',
//   'ETDudt',
//   'TAXIutc',
//   'OUTudt',
//   'OFFudt',
//   'destinationGate',
//   'ETAlocal',
//   'ETAudt',
//   'ONudt',
//   'INudt',
//   'previousTailNumber',
//   'ETE',
//   'DCNutc',
//   'ETOutc',
//   'EONutc',
//   'EDTCutc',
//   'flightType',
//   'newDepartureCity',
//   'newArrivalCity',
//   'SchedOAGEquipType',
//   'OAGEquipSubType',
//   'csvFSDailyID',
//   'tailNumBeforeCancel',
//   'CTAUTC',
//   'cancelled',
//   'replaced',
//   'ATCStatus',
//   'scheduledFlightType',
//   'aircraftRouting',
//   'mealService',
//   'hub',
//   'landingRestriction',
//   'headStartFlight',
//   'actualDeparture',
//   'specialFlight',
//   'actualArrival',
//   'scheduledTaxiOut',
//   'scheduledTaxiIn',
//   'STOSetByUser',
//   'STISetByUser',
//   'CTFlightNumber'])).on('data', data => results.push(data));

// Promise.all([parseCSVFile]);
// console.log(results);

