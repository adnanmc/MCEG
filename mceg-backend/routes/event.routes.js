const express = require('express');
const router = express.Router();
const { postEvent } = require('../controllers/event.controller');

router.route('/').post(postEvent);
router.route('/out').post(postEvent);
router.route('/off').post(postEvent);
router.route('/on').post(postEvent);
router.route('/in').post(postEvent);
router.route('/etd').post(postEvent);
router.route('/eta').post(postEvent);
router.route('/eto').post(postEvent);
router.route('/eon').post(postEvent);
router.route('/sub').post(postEvent);
router.route('/cnl').post(postEvent);
router.route('/del').post(postEvent);
router.route('/rin').post(postEvent);
router.route('/rem').post(postEvent);
router.route('/asn').post(postEvent);
router.route('/gtd').post(postEvent);
router.route('/gta').post(postEvent);
router.route('/udd').post(postEvent);
router.route('/uda').post(postEvent);
router.route('/rmd').post(postEvent);
router.route('/rma').post(postEvent);
router.route('/grd').post(postEvent);
router.route('/air').post(postEvent);
router.route('/dvc').post(postEvent);
router.route('/new').post(postEvent);

module.exports = router;