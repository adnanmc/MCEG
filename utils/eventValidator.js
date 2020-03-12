const joi = require("@hapi/joi");
const v = require("voca");
const airportDataFile = require("./airportData.json");
const airportCodesArray = [];
airportDataFile.forEach(element => {
  airportCodesArray.push(element.IATA);
});
const allowedEvents = [
  "OUT",
  "OFF",
  "ON",
  "IN",
  "ETD",
  "ETA",
  "ETO",
  "EON",
  "SUB",
  "CNL",
  "RIN",
  "DEL",
  "GTD",
  "GTA",
  "ASN",
  "REM",
  "UDD",
  "UDA",
  "RMD",
  "RMA",
  "GRD",
  "AIR",
  "DVC",
  "NEW"
];
const adhoc16Schema = joi.object({
  stg: joi
    .string()
    .trim()
    .required()
    .pattern(/^stg[1-3]$/)
    .messages({
      "string.pattern.base": '"stg" must be stg1 or stg2 or stg3'
    }),
  flightNum: joi
    .string()
    .trim()
    .required()
    .pattern(/^\d{3}[1-9]$/)
    .messages({
      "string.pattern.base": '"flightNum" must be 4 digit. Ex: 0024'
    }),
  utcOriginDate: joi
    .string()
    .trim()
    .required()
    .pattern(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/)
    .messages({
      "string.pattern.base": '"utcOriginDate" must be in the format YYYYMMDD'
    }),
  origin: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...airportCodesArray)
    .messages({
      "any.only": '"origin" must be a valid IATA airport code'
    }),
  destination: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...airportCodesArray)
    .messages({
      "any.only": '"destination" must be a valid IATA airport code'
    }),
  stdUTC: joi
    .string()
    .trim()
    .required()
    .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
    .messages({
      "string.pattern.base":
        '"stdUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
    }),
  staUTC: joi.when("eventType", {
    is: "NEW",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"staUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  eventType: joi
    .string()
    .trim()
    .required()
    .uppercase()
    .valid(...allowedEvents),
  outUTC: joi.when("eventType", {
    is: "OUT",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"outUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  offUTC: joi.when("eventType", {
    is: "OFF",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"offUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  onUTC: joi.when("eventType", {
    is: "ON",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"onUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  inUTC: joi.when("eventType", {
    is: "IN",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"inUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  etdUTC: joi.when("eventType", {
    is: "ETD",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"etdUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  etaUTC: joi.when("eventType", {
    is: joi.valid(...["ETA", "DVC"]),
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"etaUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  etoUTC: joi.when("eventType", {
    is: "ETO",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"etoUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  eonUTC: joi.when("eventType", {
    is: "EON",
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^(0[0-9]|1[0-9]|2[0-3])[0-5][0-9]$/)
      .messages({
        "string.pattern.base":
          '"eonUTC" must be HHMM in 24hour format. Ex: 0059, 1523'
      })
  }),
  tailNum: joi.when("eventType", {
    is: joi.valid(...["SUB", "ASN", "NEW"]),
    then: joi
      .string()
      .trim()
      .required()
      .pattern(/^[1-9]\d{2,3}$/)
      .messages({
        "string.pattern.base": '"tailNum" must be 3 or 4 digit. Ex: 548'
      })
  }),
  depGate: joi.when("eventType", {
    is: "GTD",
    then: joi
      .string()
      .required()
      .trim()
      .uppercase()
      .regex(/^([a-zA-Z0-9]){1,4}$/)
      .messages({
        "string.pattern.base":
          '"depGate" must minimum 1 char max 4 char. Ex: 02A'
      })
  }),
  arrGate: joi.when("eventType", {
    is: "GTA",
    then: joi
      .string()
      .required()
      .trim()
      .uppercase()
      .regex(/^([a-zA-Z0-9]){1,4}$/)
      .messages({
        "string.pattern.base":
          '"arrGate" must minimum 1 char max 4 char. Ex: 02A'
      })
  }),
  divertCity: joi.when("eventType", {
    is: "DVC",
    then: joi
      .string()
      .trim()
      .required()
      .uppercase()
      .valid(...airportCodesArray)
      .messages({
        "any.only": '"divertCity" must be a valid IATA airport code'
      })
  }),
  nextDayCrossover: joi.when("eventType", {
    is: "NEW",
    then: joi
      .boolean()
      .required()
      .messages({
        "boolean.base": '"nextDayCrossover" must be true or false'
      })
  })
});

const adhoc16SchemaValidation = body => {
  const { error, value } = adhoc16Schema.validate(body);
  if (error) {
    let userFriendlyErrorMessage = v(error.details[0].message).replaceAll(
      '"',
      "'"
    );
    return { error: userFriendlyErrorMessage };
  } else {
    return { value: value };
  }
};

module.exports = {
  adhoc16SchemaValidation
};
