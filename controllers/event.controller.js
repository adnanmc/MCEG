const { sendAdhoc16 } = require("../utils/event.util");
const { adhoc16SchemaValidation } = require("../utils/eventValidator");
const asyncHandler = require("../middleware/async");

// @desc        post OUT event
// @route       POST /api/v1/out
// @access      Public
exports.postOUT = asyncHandler(async (req, res, next) => {
  try {
    let body = req.body;
    const { error, value } = adhoc16SchemaValidation(body);
    if (error) {
      res.status(400).json({ success: false, error: error });
    } else {
      let fileSendStatus = await sendAdhoc16(value);
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
