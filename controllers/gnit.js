var express = require('express');
var { gnit_con: db } = require('../configs/db.js');

var meter = {};

meter.getGNITdata = async function (req, res) {
  console.log('received query for VVIT data');

  const GNITquery = "SELECT * FROM `gnits_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM gnits_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(GNITquery, function (err, result, fields) {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;
