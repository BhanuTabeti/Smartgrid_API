var express = require('express');
var { getReading } = require('../controllers/meter');
var router = express.Router();

/* GET users listing. */
router.get('/', getReading);

module.exports = router;
