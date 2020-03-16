const mongoose = require("mongoose");
const flightSchema = require("./flight.schema");

// as ADH004 returns only flights in csv based on local date we need to map them for 8 days
// yesterday is day 0, today is day 1, tomorrow is day 2 and so on until day 7
// all of them are available for all 3 movement control environment MVT STG 1, 2, 3

// flights for day 0
const STG1D0 = mongoose.model("STG1D0", flightSchema);
const STG2D0 = mongoose.model("STG2D0", flightSchema);
const STG3D0 = mongoose.model("STG3D0", flightSchema);

// flights for day 1
const STG1D1 = mongoose.model("STG1D1", flightSchema);
const STG2D1 = mongoose.model("STG2D1", flightSchema);
const STG3D1 = mongoose.model("STG3D1", flightSchema);

// flights for day 2
const STG1D2 = mongoose.model("STG1D2", flightSchema);
const STG2D2 = mongoose.model("STG2D2", flightSchema);
const STG3D2 = mongoose.model("STG3D2", flightSchema);

// flights for day 3
const STG1D3 = mongoose.model("STG1D3", flightSchema);
const STG2D3 = mongoose.model("STG2D3", flightSchema);
const STG3D3 = mongoose.model("STG3D3", flightSchema);

// flights for day 4
const STG1D4 = mongoose.model("STG1D4", flightSchema);
const STG2D4 = mongoose.model("STG2D4", flightSchema);
const STG3D4 = mongoose.model("STG3D4", flightSchema);

// flights for day 5
const STG1D5 = mongoose.model("STG1D5", flightSchema);
const STG2D5 = mongoose.model("STG2D5", flightSchema);
const STG3D5 = mongoose.model("STG3D5", flightSchema);

// flights for day 6
const STG1D6 = mongoose.model("STG1D6", flightSchema);
const STG2D6 = mongoose.model("STG2D6", flightSchema);
const STG3D6 = mongoose.model("STG3D6", flightSchema);

// flights for day 7
const STG1D7 = mongoose.model("STG1D7", flightSchema);
const STG2D7 = mongoose.model("STG2D7", flightSchema);
const STG3D7 = mongoose.model("STG3D7", flightSchema);

// export all
module.exports = {
  STG1D0,
  STG1D1,
  STG1D2,
  STG1D3,
  STG1D4,
  STG1D5,
  STG1D6,
  STG1D7,
  STG2D0,
  STG2D1,
  STG2D2,
  STG2D3,
  STG2D4,
  STG2D5,
  STG2D6,
  STG2D7,
  STG3D0,
  STG3D1,
  STG3D2,
  STG3D3,
  STG3D4,
  STG3D5,
  STG3D6,
  STG3D7
};
