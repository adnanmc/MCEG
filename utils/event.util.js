const moment = require("moment");
const fs = require("fs-extra");
const v = require("voca");
const util = require("./common.util");

let body = {
    "stg": "stg1",
    "flightNum": "55",
    "utcOriginDate": "20170812",
    "origin": "JFK",
    "destination": "BOS",
    "stdUTC": "45",
    "outUTC": "45"
}

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
            adhocOFFString: `${adhocBaseString.adhocBaseString}OFF9999${offUTC}`
        };
    }
};