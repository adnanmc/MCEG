const express = require("express");
const cors = require("cors");
// route files
const eventRoutes = require("./routes/event.routes");
const stg1Routes = require("./routes/stg1.routes");
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

// handle invalid json
app.use(function(err, req, res, next) {
  if (err) {
    res.status(err.statusCode).json({ success: false, error: "Bad Request" });
  }
});

// event route
app.use("/api/v1/events", eventRoutes);

// stg1 route
app.use("/api/v1/stg1", stg1Routes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
