const fs = require("fs-extra");
const utils = require("./utils/common.util");
const moment = require("moment");
const csv = require('csv-parser');
var fieldsArray =  ['recordStatus',
      'lastDateModified',
      'lastTimeModified',
      'lastUserToModify',
      'legDepartureDate',
      'airlineCode',
      'identifier',
      'sequence',
      'flightOriginDay',
      'numericFlightDate',
      'numGMTDate',
      'STDudt',
      'STAudt',
      'tailNumber',
      'numLastDateModified',
      'flightStatus',
      'origin',
      'STDLocal',
      'dispatchDesk',
      'STDGMTVariance',
      'destination',
      'STALocal',
      'STAGMTVariance',
      'OAGEquipmentType',
      'ACConfiguration',
      'serviceType',
      'originGate',
      'ETDlocal',
      'ETDudt',
      'TAXIutc',
      'OUTudt',
      'OFFudt',
      'destinationGate',
      'ETAlocal',
      'ETAudt',
      'ONudt',
      'INudt',
      'previousTailNumber',
      'ETE',
      'DCNutc',
      'ETOutc',
      'EONutc',
      'EDTCutc',
      'flightType',
      'newDepartureCity',
      'newArrivalCity',
      'SchedOAGEquipType',
      'OAGEquipSubType',
      'csvFSDailyID',
      'tailNumBeforeCancel',
      'CTAUTC',
      'cancelled',
      'replaced',
      'ATCStatus',
      'scheduledFlightType',
      'aircraftRouting',
      'mealService',
      'hub',
      'landingRestriction',
      'headStartFlight',
      'actualDeparture',
      'specialFlight',
      'actualArrival',
      'scheduledTaxiOut',
      'scheduledTaxiIn',
      'STOSetByUser',
      'STISetByUser',
      'CTFlightNumber'];
let filePath = "./mceg_adhoc4.csv";
fs.readFileSync(filePath, {encoding: 'utf-8'}, (err, data)=>{
    let rawStringArray = data.split("\n");
    return rawStringArray;
}).then(rawStringArray => {
    rawStringArray.map((row) => {
        console.log(row);
    })
});




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



// const path = require('path');

// async function parseCSVData() {
//     let filePath = "./mceg_adhoc4.csv";

// //This is the array which will convert the json data.
// var jsonArray = [];
// //This will read the file.
// await fs.readFile(filePath,{encoding:'utf-8'},function(err,data){
//     if(err){
//        return  console.log(err);
//     }
//     //The following line will split the csv file line by line and store each of it in the vraiable dataArray.
//     var dataArray = data.split("\n");
//     //This line helps us to obtain the keys for various values in the file.
//     var fieldsArray =  ['recordStatus',
//       'lastDateModified',
//       'lastTimeModified',
//       'lastUserToModify',
//       'legDepartureDate',
//       'airlineCode',
//       'identifier',
//       'sequence',
//       'flightOriginDay',
//       'numericFlightDate',
//       'numGMTDate',
//       'STDudt',
//       'STAudt',
//       'tailNumber',
//       'numLastDateModified',
//       'flightStatus',
//       'origin',
//       'STDLocal',
//       'dispatchDesk',
//       'STDGMTVariance',
//       'destination',
//       'STALocal',
//       'STAGMTVariance',
//       'OAGEquipmentType',
//       'ACConfiguration',
//       'serviceType',
//       'originGate',
//       'ETDlocal',
//       'ETDudt',
//       'TAXIutc',
//       'OUTudt',
//       'OFFudt',
//       'destinationGate',
//       'ETAlocal',
//       'ETAudt',
//       'ONudt',
//       'INudt',
//       'previousTailNumber',
//       'ETE',
//       'DCNutc',
//       'ETOutc',
//       'EONutc',
//       'EDTCutc',
//       'flightType',
//       'newDepartureCity',
//       'newArrivalCity',
//       'SchedOAGEquipType',
//       'OAGEquipSubType',
//       'csvFSDailyID',
//       'tailNumBeforeCancel',
//       'CTAUTC',
//       'cancelled',
//       'replaced',
//       'ATCStatus',
//       'scheduledFlightType',
//       'aircraftRouting',
//       'mealService',
//       'hub',
//       'landingRestriction',
//       'headStartFlight',
//       'actualDeparture',
//       'specialFlight',
//       'actualArrival',
//       'scheduledTaxiOut',
//       'scheduledTaxiIn',
//       'STOSetByUser',
//       'STISetByUser',
//       'CTFlightNumber'];

//     //The following loop creates an object for every line and then pushes it into the array.
//     for(var i=1;i<dataArray.length;i++){
//         var temp = {};
//         //contains values which are separated by a comma in a line.
//         var valuesArray = dataArray[i].split(",");
//             for(var k=0;k<valuesArray.length;k++){
//                 temp[fieldsArray[k]] = valuesArray[k]
//             }   
//             //pushes the object into the array.
//             jsonArray.push(temp);
            
//     }
//     //return result; //JavaScript object
//     return JSON.stringify(jsonArray); //JSON
//    });
// }

// let data = parseCSVData();
// Promise.all([data()]);
// console.log(data);



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

