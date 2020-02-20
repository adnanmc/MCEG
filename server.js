const express = require("express");
const cors = require("cors");
// route files
const eventRoutes = require('./routes/event.routes');

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// body parser
app.use(express.json());

// event route
app.use("/api/v1/event", eventRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
