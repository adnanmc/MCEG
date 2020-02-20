const moment = require("moment");
const v = require("voca");
const { adhocMainString, validateTime } = require("./common.util");

// let body = {
//     "stg": "stg1",
//     "flightNum": "55",
//     "utcOriginDate": "20170812",
//     "origin": "JFK",
//     "destination": "BOS",
//     "stdUTC": "45",
//     "outUTC": "45"
// }

// validate OUT value of adhoc request
const adhocOUTString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let outUTC = v(body.outUTC)
    .trim()
    .padLeft(4, "0");
  let validateOUT = validateTime(outUTC);

  if (
    v.count(outUTC) != 4 ||
    isNaN(outUTC) ||
    validateOUT == false ||
    body.outUTC == "" ||
    body.outUTC == null
  ) {
    error =
      "outUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocOUTString: `${adhocBaseString.adhocBaseString}OUT${outUTC}`
    };
  }
};

// validate OFF value of adhoc request
const adhocOFFString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let offUTC = v(body.offUTC)
    .trim()
    .padLeft(4, "0");
  let validateOFF = validateTime(offUTC);

  if (
    v.count(offUTC) != 4 ||
    isNaN(offUTC) ||
    validateOFF == false ||
    body.offUTC == "" ||
    body.offUTC == null
  ) {
    error =
      "offUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocOFFString: `${adhocBaseString.adhocBaseString}OFF9999${offUTC}`
    };
  }
};

// validate ON value of adhoc request
const adhocONString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let onUTC = v(body.onUTC)
    .trim()
    .padLeft(4, "0");
  let validateON = validateTime(onUTC);

  if (
    v.count(onUTC) != 4 ||
    isNaN(onUTC) ||
    validateON == false ||
    body.onUTC == "" ||
    body.onUTC == null
  ) {
    error =
      "onUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocONString: `${adhocBaseString.adhocBaseString}ON_${onUTC}`
    };
  }
};

// validate IN value of adhoc request
const adhocINString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let inUTC = v(body.inUTC)
    .trim()
    .padLeft(4, "0");
  let validateIN = validateTime(inUTC);

  if (
    v.count(inUTC) != 4 ||
    isNaN(inUTC) ||
    validateIN == false ||
    body.inUTC == "" ||
    body.inUTC == null
  ) {
    error =
      "inUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocINString: `${adhocBaseString.adhocBaseString}IN_9999${inUTC}`
    };
  }
};

// validate ETD value of adhoc request
const adhocETDString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let etdUTC = v(body.etdUTC)
    .trim()
    .padLeft(4, "0");
  let validateETD = validateTime(etdUTC);

  if (
    v.count(etdUTC) != 4 ||
    isNaN(etdUTC) ||
    validateETD == false ||
    body.etdUTC == "" ||
    body.etdUTC == null
  ) {
    error =
      "etdUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocETDString: `${adhocBaseString.adhocBaseString}ETD${etdUTC}`
    };
  }
};

// validate ETA value of adhoc request
const adhocETAString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let etaUTC = v(body.etaUTC)
    .trim()
    .padLeft(4, "0");
  let validateETA = validateTime(etaUTC);

  if (
    v.count(etaUTC) != 4 ||
    isNaN(etaUTC) ||
    validateETA == false ||
    body.etaUTC == "" ||
    body.etaUTC == null
  ) {
    error =
      "etaUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocETAString: `${adhocBaseString.adhocBaseString}ETA${etaUTC}`
    };
  }
};

// validate ETO value of adhoc request
const adhocETOString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let etoUTC = v(body.etoUTC)
    .trim()
    .padLeft(4, "0");
  let validateETO = validateTime(etoUTC);

  if (
    v.count(etoUTC) != 4 ||
    isNaN(etoUTC) ||
    validateETO == false ||
    body.etoUTC == "" ||
    body.etoUTC == null
  ) {
    error =
      "etoUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocETOString: `${adhocBaseString.adhocBaseString}ETO${etoUTC}`
    };
  }
};

// validate EON value of adhoc request
const adhocEONString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let eonUTC = v(body.eonUTC)
    .trim()
    .padLeft(4, "0");
  let validateEON = validateTime(eonUTC);

  if (
    v.count(eonUTC) != 4 ||
    isNaN(eonUTC) ||
    validateEON == false ||
    body.eonUTC == "" ||
    body.eonUTC == null
  ) {
    error =
      "eonUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocEONString: `${adhocBaseString.adhocBaseString}EON${eonUTC}`
    };
  }
};

// validate SUB value of adhoc request
const adhocSUBString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let tailNum = v(body.tailNum)
    .trim()
    .padLeft(4, " ");

  if (
    v.count(tailNum) != 4 ||
    isNaN(tailNum) ||
    body.tailNum == "" ||
    body.tailNum == null
  ) {
    error = "tailNum must be 3 or 4 digit";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocSUBString: `${adhocBaseString.adhocBaseString}SUB${tailNum}`
    };
  }
};

// validate CNL value of adhoc request
const adhocCNLString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocCNLString: `${adhocBaseString.adhocBaseString}CNL`
    };
  }
};

// validate DEL value of adhoc request
const adhocDELString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocDELString: `${adhocBaseString.adhocBaseString}DEL`
    };
  }
};

// validate GTD value of adhoc request
const adhocGTDString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let depGate = v(body.depGate)
    .trim()
    .padLeft(4, " ");

  if (v.count(depGate) != 4 || body.depGate == "" || body.depGate == null) {
    error = "depGate must be 4 character value";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocGTDString: `${adhocBaseString.adhocBaseString}GTD${depGate}`
    };
  }
};

// validate GTA value of adhoc request
const adhocGTAString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let arrGate = v(body.arrGate)
    .trim()
    .padLeft(4, " ");

  if (v.count(arrGate) != 4 || body.arrGate == "" || body.arrGate == null) {
    error = "arrGate must be 4 character value";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocGTAString: `${adhocBaseString.adhocBaseString}GTA${arrGate}`
    };
  }
};

// validate RIN value of adhoc request
const adhocRINString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocRINString: `${adhocBaseString.adhocBaseString}RIN`
    };
  }
};

// validate ASN value of adhoc request
const adhocASNString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let tailNum = v(body.tailNum)
    .trim()
    .padLeft(4, " ");

  if (
    v.count(tailNum) != 4 ||
    isNaN(tailNum) ||
    body.tailNum == "" ||
    body.tailNum == null
  ) {
    error = "tailNum must be 3 or 4 digit";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocASNString: `${adhocBaseString.adhocBaseString}ASN${tailNum}`
    };
  }
};

// validate REM value of adhoc request
const adhocREMString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocREMString: `${adhocBaseString.adhocBaseString}REM`
    };
  }
};

// validate UDD value of adhoc request
const adhocUDDString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocUDDString: `${adhocBaseString.adhocBaseString}UDD`
    };
  }
};

// validate UDA value of adhoc request
const adhocUDAString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocUDAString: `${adhocBaseString.adhocBaseString}UDA`
    };
  }
};

// validate RMD value of adhoc request
const adhocRMDString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocRMDString: `${adhocBaseString.adhocBaseString}RMD`
    };
  }
};

// validate RMA value of adhoc request
const adhocRMAString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocRMAString: `${adhocBaseString.adhocBaseString}RMA`
    };
  }
};

// validate GRD value of adhoc request
const adhocGRDString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocGRDString: `${adhocBaseString.adhocBaseString}GRD`
    };
  }
};

// validate AIR value of adhoc request
const adhocAIRString = body => {
  let adhocBaseString = adhocMainString(body);

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocAIRString: `${adhocBaseString.adhocBaseString}AIR`
    };
  }
};

// validate DVC value of adhoc request
const adhocDVCString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let etaUTC = v(body.etaUTC)
    .trim()
    .padLeft(4, "0");
  let validateETA = validateTime(etaUTC);

  let divertCity = v(body.divertCity)
    .trim()
    .upperCase();

  if (
    v.count(etaUTC) != 4 ||
    isNaN(etaUTC) ||
    validateETA == false ||
    body.etaUTC == "" ||
    body.etaUTC == null
  ) {
    error =
      "etaUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  } else if (
    v(divertCity).count() != 3 ||
    v(divertCity).isAlpha() == false ||
    body.divertCity == "" ||
    body.divertCity == null
  ) {
    error = "divertCity must be 3 character airport code EX: JFK";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocDVCString: `${adhocBaseString.adhocBaseString}DVC${etaUTC}${divertCity}`
    };
  }
};

// validate NEW value of adhoc request
const adhocNEWString = body => {
  // add any error to return
  let error;
  let adhocBaseString = adhocMainString(body);
  let staUTC = v(body.staUTC)
    .trim()
    .padLeft(4, "0");
  let validateSTA = validateTime(staUTC);
  let nextDayCrossover = v(body.nextDayCrossover).trim();
  let tailNum = v(body.tailNum)
    .trim()
    .padLeft(4, " ");

  if (
    v.count(staUTC) != 4 ||
    isNaN(staUTC) ||
    validateSTA == false ||
    body.staUTC == "" ||
    body.staUTC == null
  ) {
    error =
      "staUTC must be 4 digit valid time value in 24hr format like 0025, 1545 etc";
  } else if (
    (nextDayCrossover != "1" && nextDayCrossover != "0") ||
    body.nextDayCrossover == "" ||
    body.nextDayCrossover == null
  ) {
    error =
      "nextDayCrossover must be either 1 or 0 which indicates true and false";
  } else if (
    v.count(tailNum) != 4 ||
    isNaN(tailNum) ||
    body.tailNum == "" ||
    body.tailNum == null
  ) {
    error = "tailNum must be 3 or 4 digit";
  }

  if (adhocBaseString.error) {
    return adhocBaseString;
  } else if (error) {
    return { error: error };
  } else {
    return {
      sendFolder: adhocBaseString.sendFolder,
      adhocNEWString: `${adhocBaseString.adhocBaseString}NEW${staUTC}${nextDayCrossover}${tailNum}`
    };
  }
};

module.exports = {
  adhocOUTString,
  adhocOFFString,
  adhocONString,
  adhocINString,
  adhocETDString,
  adhocETAString,
  adhocETOString,
  adhocEONString,
  adhocSUBString,
  adhocCNLString,
  adhocDELString,
  adhocGTDString,
  adhocGTAString,
  adhocRINString,
  adhocASNString,
  adhocREMString,
  adhocUDDString,
  adhocUDAString,
  adhocRMDString,
  adhocRMAString,
  adhocGRDString,
  adhocAIRString,
  adhocDVCString,
  adhocNEWString
};
