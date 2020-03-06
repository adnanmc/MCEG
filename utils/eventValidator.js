const { body, validationResult } = require("express-validator");
const airporData = require("./airportData.json");
const airportDataJson = JSON.parse(airporData);

let airportCodeArray = airportDataJson.forEach(element => {
    return element["IATA-code"];
});
const baseValidationRules = () => {
  let stg = body("stg")
    .trim()
    .notEmpty()
    .matches(/^stg[1-3]$/)
    .withMessage("stg must be stg1 or stg2 or stg3");

  let flightNum = body("flightNum")
    .trim()
    .notEmpty()
    .matches(/^\d{3}[1-9]$/)
    .withMessage("flightNum must be 4 digit. Ex: 0024");

  let utcOriginDate = body("utcOriginDate")
    .trim()
    .notEmpty()
    .matches(/([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/)
    .withMessage("utcOriginDate must be in the format YYYYMMDD");

  if (
    body("eventType")
      .trim()
      .equals("out")
  ) {
    body("flightNum")
      .trim()
      .notEmpty()
      .matches(/^\d{3}[1-9]$/)
      .withMessage("flightNum must be 4 digit. Ex: 0024");
  }
  return [];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate
};
