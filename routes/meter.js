var express = require('express');
var { getReading, getAblockHist } = require('../controllers/meter');
var router = express.Router();

/* GET users listing. */
router.get('/', getReading);

router.get('/history', getAblockHist);

module.exports = router;
