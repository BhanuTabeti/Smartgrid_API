var express = require('express');
var { pool: db } = require('../configs/db.js');

var meter = {};

meter.getReading = async function (block, meterId, callback) {
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
    }
    return callback(err, result);
  });
};

module.exports = meter;