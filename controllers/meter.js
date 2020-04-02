var express = require('express');
var { root_con: db } = require('../configs/db.js');

var meter = {};

meter.getReading = async function (req, res) {
  var block = req.query.block;
  var meterId = req.query.meterId; 
	var blockString;

  //Change this an Util or Something  
  if (block === "A") {
    blockString = "Block_A" 
  }
  else if (block === "B") {
    blockString = "Block_B" 
  }
  else if (block === "C") {
    blockString = "Block_C" 
  }

  var query = ` SELECT * FROM sensorreadings WHERE date = (SELECT MAX(date) FROM sensorreadings WHERE meter_number = ${db.escape(meterID)} AND block = ${db.escape(blockString)}) AND meter_number = ${db.escape(meterID)}`;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
      res.send(result);
  });
};

meter.getAblockHist = async function (req, res) {
  console.log('received query for A block total');

  const a_query = 'SELECT * FROM `block_totals` order by tstamp desc limit 120';

  db.query(a_query, function (err, result, fields) {
    if (err) res.status(500).send(err);

    res.json(result);
    console.log('server sending A block historical data');
  });
};

module.exports = meter;
