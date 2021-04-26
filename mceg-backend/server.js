const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error');
// route files
const eventRoutes = require('./routes/event.routes');
const featureConfigRoute = require('./routes/config.routes');
const flightDataRoutes = require('./routes/flightData.routes');
const connectDB = require('./config/db.config');

// connect to db
// connectDB();

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// body parser
app.use(express.json());

// event route
app.use('/api/v1/events', eventRoutes);

// event route
app.use('/swagger', express.static('swagger'));

// get app feature and config data
app.use('/api/config', featureConfigRoute);

// event route
app.use('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
      <head>
          
          <title>MCEG</title>
      </head>
  <body style="text-align: center;">
  <div style="margin: 0 auto;">
      <div>UI is coming soon plese use the swagger link below for now</div>
      
      <button style="background-color: palegreen; margin: 10px;"><a href=/swagger>Swagger</a></button>
  </div>    

  </body>
</html>`);
});

// stg1 route
// app.use("/api/v1/flights", flightDataRoutes);

// handle error
app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
