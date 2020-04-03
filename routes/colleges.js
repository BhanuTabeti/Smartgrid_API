var express = require('express');

var { getVVITdata } = require('../controllers/vvit');
var { getOUCEdata } = require('../controllers/ouce');
var { getDemoData } = require('../controllers/demo');
var { getBvrithData } = require('../controllers/bvrith');
var { getGNITdata , getGNITdataPeak} = require('../controllers/gnit');
var { getPVPSITdata , getPVPSITdataPeak } = require('../controllers/pvpsit');

var router = express.Router();

/* GET users listing. */
router.get('/vvit', getVVITdata);
router.get('/ouce', getOUCEdata);
router.get('/gnit', getGNITdata);
router.get('/gnit_peak', getGNITdataPeak);
router.get('/pvpsit', getPVPSITdata);
router.get('/pvpsit_peak', getPVPSITdataPeak);
router.get('/bvrith', getBvrithData);
router.get('/demo', getDemoData);

module.exports = router;
