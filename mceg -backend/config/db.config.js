const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/MCEG_DB";
const connectDB = async () => {
  const conn = await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
    // useUnifiedTopology: true
    // enabling unnifiedTopology will cause the app to not display connection error message
    // in server.js promise rejection handler will not be able to display message
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
