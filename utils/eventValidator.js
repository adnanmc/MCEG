const joi = require("@hapi/joi");
const airportDataFile = require("./utils/airportData.json");
const airportCodesArray = [];
airportDataFile.forEach(element => {
  airportCodesArray.push(element.IATA);
});

const adhoc16Schema = joi.object({
  stg: joi
    .string()
    .required()
    .uppercase()
    .regex(/^stg[1-3]$/)
    .messages({
      "string.base": `"stg" should be a type of 'text'`,
      "string.empty": `"stg" cannot be an empty field`,
      "any.required": `"stg" stg must be stg1 or stg2 or stg3`
    }),
  flightNum: joi
    .string()
    .required()
    .regex(/^\d{3}[1-9]$/)
    .messages({
      "string.base": `"flightNum" should be a type of 'text'`,
      "string.empty": `"flightNum" cannot be an empty field`,
      "any.required": `"flightNum" must be 4 digit number ex: 0024`
    })
});
