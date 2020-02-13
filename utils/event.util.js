const v = require("voca");
const util = require("./common.util");

let body = {
    "stg":"stg1",
    "flightNum":"55",
    "utcOriginDate":"20170812",
    "origin":"JFK",
    "destination":"BOS",
    "stdUTC":"1234",
    "outUTC":"1345"
  }

let adhocOUTString = util.adhocMainValidate(body)

if (adhocOUTString.error) {
    console.log(adhocOUTString.error);
} else {
    console.log(adhocOUTString);
}