const { sendAdhoc16 } = require("../utils/event.util");
const { adhoc16Schema } = require("../utils/eventValidator");
const asyncHandler = require("../middleware/async");

// @desc        post OUT event
// @route       POST /api/v1/out
// @access      Public
exports.postOUT = asyncHandler(async (req, res, next) => {
  try {
    let body = req.body;
    let validation = await adhoc16Schema.validate(body);
    let error = validation.error;
    if (error) {
      res.status(400).json({ success: false, error: error.details[0].message });
    } else {
      let fileSendStatus = await sendAdhoc16(validation.value);
      if (fileSendStatus.error) {
        res.status(400).json({ success: false, error: fileSendStatus.error });
      } else {
        res
          .status(201)
          .json({ success: true, message: fileSendStatus.message });
      }
    }
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
