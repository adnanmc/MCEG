const express = require('express');
const router = express.Router();
const featureConfig = require('../config/feature.config.json');

// loading app config to enable or disable features
router.route('/').get((req, res) => {
  res.send(JSON.stringify(featureConfig));
});

module.exports = router;
