var express = require('express');

var { getVVITdata } = require('../controllers/vvit');
var { getOUCEdata } = require('../controllers/ouce');
var { getGNITdata } = require('../controllers/gnit');
var { getPVPSITdata } = require('../controllers/pvpsit');
var { getDemoData } = require('../controllers/demo');
var { getBvrithData} = require('../controllers/bvrith');

var router = express.Router();

/* GET users listing. */
router.get('/vvit', getVVITdata);
router.get('/ouce', getOUCEdata);
router.get('/gnit', getGNITdata);
router.get('/pvpsit', getPVPSITdata);
router.get('/demo', getDemoData);
router.get('/bvrith', getBvrithData);

module.exports = router;
