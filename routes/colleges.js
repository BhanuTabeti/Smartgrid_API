var express = require('express');
// var { getReading, getAblockHist } = require('../controllers/meter');
var { getVVITdata } = require('../controllers/vvit')

var router = express.Router();

/* GET users listing. */
router.get('/vvit', getVVITdata)

module.exports = router;
