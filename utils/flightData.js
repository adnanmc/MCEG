const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const {
  STG1D0,
  STG2D0,
  STG3D0,
  STG1D1,
  STG2D1,
  STG3D1,
  STG1D2,
  STG2D2,
  STG3D2,
  STG1D3,
  STG2D3,
  STG3D3,
  STG1D4,
  STG2D4,
  STG3D4,
  STG1D5,
  STG2D5,
  STG3D5,
  STG1D6,
  STG2D6,
  STG3D6,
  STG1D7,
  STG2D7,
  STG3D7
} = require("../models/flightData.model");

// get all flights
const getFlights = async (stg, day) => {
  const stgRegex = RegExp(/^stg[1-3]$/);
  const dayRegex = RegExp(/^d[0-7]$/);
  if (!stgRegex.test(stg)) {
    return {
      errorResponse: new ErrorResponse(
        `'stg' must be stg1 or stg2 or stg3. It indicates which MVT environment to pull data from`,
        404
      )
    };
  } else if (!dayRegex.test(day)) {
    return {
      errorResponse: new ErrorResponse(
        `'day' must be from d0 up to d7. d0 means yesterday, d1 means today and so on ...`,
        404
      )
    };
  } else {
    stgDay = `${stg}${day}`.trim().toUpperCase();
    let flightData;
    switch (stgDay) {
      // ---------------------- D0 (yesterday)-------------------------
      case "STG1D0":
        flightData = await STG1D0.find();
        return { flightData: flightData };
      case "STG2D0":
        flightData = await STG2D0.find();
        return { flightData: flightData };
      case "STG3D0":
        flightData = await STG3D0.find();
        return { flightData: flightData };

      // ---------------------- D1 (today)-------------------------
      case "STG1D1":
        flightData = await STG1D1.find();
        return { flightData: flightData };
      case "STG2D1":
        flightData = await STG2D1.find();
        return { flightData: flightData };
      case "STG3D1":
        flightData = await STG3D1.find();
        return { flightData: flightData };

      // ---------------------- D2 (tomorrow)-------------------------
      case "STG1D2":
        flightData = await STG1D2.find();
        return { flightData: flightData };
      case "STG2D2":
        flightData = await STG2D2.find();
        return { flightData: flightData };
      case "STG3D2":
        flightData = await STG3D2.find();
        return { flightData: flightData };

      // ---------------------- D3-------------------------
      case "STG1D3":
        flightData = await STG1D3.find();
        return { flightData: flightData };
      case "STG2D3":
        flightData = await STG2D3.find();
        return { flightData: flightData };
      case "STG3D3":
        flightData = await STG3D3.find();
        return { flightData: flightData };

      // ---------------------- D4-------------------------
      case "STG1D4":
        flightData = await STG1D4.find();
        return { flightData: flightData };
      case "STG2D4":
        flightData = await STG2D4.find();
        return { flightData: flightData };
      case "STG3D4":
        flightData = await STG3D4.find();
        return { flightData: flightData };

      // ---------------------- D5-------------------------
      case "STG1D5":
        flightData = await STG1D5.find();
        return { flightData: flightData };
      case "STG2D5":
        flightData = await STG2D5.find();
        return { flightData: flightData };
      case "STG3D5":
        flightData = await STG3D5.find();
        return { flightData: flightData };

      // ---------------------- D6-------------------------
      case "STG1D6":
        flightData = await STG1D6.find();
        return { flightData: flightData };
      case "STG2D6":
        flightData = await STG2D6.find();
        return { flightData: flightData };
      case "STG3D6":
        flightData = await STG3D6.find();
        return { flightData: flightData };

      // ---------------------- D7-------------------------
      case "STG1D7":
        flightData = await STG1D7.find();
        return { flightData: flightData };
      case "STG2D7":
        flightData = await STG2D7.find();
        return { flightData: flightData };
      case "STG3D7":
        flightData = await STG3D7.find();
        return { flightData: flightData };
    }
  }
};

// get single flight
const getFlight = async (stg, day, flightNum) => {
  const stgRegex = RegExp(/^stg[1-3]$/);
  const dayRegex = RegExp(/^d[0-7]$/);
  const flightNumRegex = RegExp(/^\d{3}[1-9]$/);
  flightNum = new String(flightNum).trim().padStart(4, "0");
  if (!stgRegex.test(stg)) {
    return {
      errorResponse: new ErrorResponse(
        `'stg' must be stg1 or stg2 or stg3. It indicates which MVT environment to pull data from`,
        404
      )
    };
  } else if (!dayRegex.test(day)) {
    return {
      errorResponse: new ErrorResponse(
        `'day' must be from d0 up to d7. d0 means yesterday, d1 means today and so on ...`,
        404
      )
    };
  } else if (!flightNumRegex.test(flightNum)) {
    return {
      errorResponse: new ErrorResponse(
        `'flightNum' must be from 0001 up to 9999`,
        404
      )
    };
  } else {
    stgDay = `${stg}${day}`.trim().toUpperCase();
    let flightData;
    switch (stgDay) {
      // ---------------------- D0 (yesterday)-------------------------
      case "STG1D0":
        flightData = await STG1D0.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D0":
        flightData = await STG2D0.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D0":
        flightData = await STG3D0.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D1 (today)-------------------------
      case "STG1D1":
        flightData = await STG1D1.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D1":
        flightData = await STG2D1.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D1":
        flightData = await STG3D1.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D2 (tomorrow)-------------------------
      case "STG1D2":
        flightData = await STG1D2.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D2":
        flightData = await STG2D2.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D2":
        flightData = await STG3D2.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D3-------------------------
      case "STG1D3":
        flightData = await STG1D3.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D3":
        flightData = await STG2D3.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D3":
        flightData = await STG3D3.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D4-------------------------
      case "STG1D4":
        flightData = await STG1D4.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D4":
        flightData = await STG2D4.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D4":
        flightData = await STG3D4.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D5-------------------------
      case "STG1D5":
        flightData = await STG1D5.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D5":
        flightData = await STG2D5.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D5":
        flightData = await STG3D5.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D6-------------------------
      case "STG1D6":
        flightData = await STG1D6.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D6":
        flightData = await STG2D6.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D6":
        flightData = await STG3D6.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };

      // ---------------------- D7-------------------------
      case "STG1D7":
        flightData = await STG1D7.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG2D7":
        flightData = await STG2D7.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
      case "STG3D7":
        flightData = await STG3D7.find({
          flightNumber: flightNum
        });
        return { flightData: flightData };
    }
  }
};

module.exports = { getFlights, getFlight };
