const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/error");
// route files
const eventRoutes = require("./routes/event.routes");
const flightDataRoutes = require("./routes/flightData.routes");
const connectDB = require("./config/db.config");

// connect to db
connectDB();

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// body parser
app.use(express.json());

// event route
app.use("/api/v1/events", eventRoutes);

// stg1 route
app.use("/api/v1/flights", flightDataRoutes);

// handle error
app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
