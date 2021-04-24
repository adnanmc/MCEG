// const stgRegex = RegExp(/^stg[1-3]$/);
// let stg = "srt4";
// let result = stgRegex.test(stg);
// console.log(result);
// const fs = require("fs");
// const v = require("voca");
// const { adhoc16Schema } = require("./utils/eventValidator");

// let body = {
//   flightNum: "0055",
//   utcOriginDate: "20200312",
//   origin: "jfk",
//   destination: "bos",
//   stdUTC: "1234",
//   staUTC: "0545",
//   nextDayCrossover: true,
//   tailNum: "288",
//   eventType: "new"
// };

// let validation = adhoc16Schema.validate(body, { abortEarly: false });
// let error = validation.error;
// if (error) {
//   console.log(v(error.details[0].message).replaceAll('"', "'"));
// } else {
//   console.log("success");
//   console.log(validation.value);
// }

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/swagger', (req, res) => {
  res.send({ test: 'different route' });
});
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname, 'dist/angular-frontend')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-frontend/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(8000, () => {
  console.log(`Started up at port 8000`);
});
