var express = require('express');
var meter = require('../controllers/meter');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var block = req.query.block;
  var meterId = req.query.meterId; 

  
});

module.exports = router;
