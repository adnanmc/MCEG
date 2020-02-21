const eventUtil = require("../utils/event.util");
const util = require("../utils/common.util");
const asyncHandler = require("../middleware/async");

// @desc        post OUT event
// @route       POST /api/v1/out
// @access      Public
exports.postOUT = asyncHandler(async (req, res, next) => {
  try {
    let body = req.body;
    let adhoc = await eventUtil.adhocOUTString(body);
    if (adhoc.adhocOUTString) {
      let sendFolder = adhoc.sendFolder;
      let adhocOUTString = adhoc.adhocOUTString;
      let fileSendStatus = await util.sendAdhocFile(
        sendFolder,
        "OUT",
        adhocOUTString
      );
      if (fileSendStatus.error) {
        res.status(400).json({ success: false, error: fileSendStatus.error });
      } else {
        res
          .status(201)
          .json({ success: true, message: fileSendStatus.message });
      }
    } else {
      res.status(400).json({ success: false, error: adhoc.error });
    }
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
