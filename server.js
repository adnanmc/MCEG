const express = require("express");
const cors = require("cors");
// route files
const eventRoutes = require("./routes/event.routes");

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

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
