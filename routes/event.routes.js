const express = require('express');
const router = express.Router();
const { postOUT } = require('../controllers/event.controller');

router.route('/out').post(postOUT);

module.exports = router;