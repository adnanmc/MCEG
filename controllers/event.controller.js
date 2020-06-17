const { sendAdhoc16 } = require('../utils/event.util');
const { adhoc16SchemaValidation } = require('../utils/eventValidator');
const asyncHandler = require('../middleware/async');

// @desc        post event
// @route       POST /api/v1/events
// @access      Public
exports.postEvent = asyncHandler(async (req, res, next) => {
  try {
    let body = req.body;
    const { error, value } = adhoc16SchemaValidation(body);
    if (error) {
      res.status(400).json({ success: false, error: error });
    } else {
      let fileSendStatus = await sendAdhoc16(value);
      if (fileSendStatus.error) {
        res
          .status(400)
          .json({
            success: false,
            error: fileSendStatus.error,
            adhoc_string: fileSendStatus.string,
          });
      } else {
        res
          .status(201)
          .json({
            success: true,
            message: fileSendStatus.message,
            adhoc_string: fileSendStatus.string,
          });
      }
    }
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
