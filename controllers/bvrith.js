var express = require('express');
var { bvrith_con: db } = require('../configs/db.js');

var meter = {};

meter.getBvrithData = async function (req, res) {
  console.log('received query for VVIT data');

  const BVRITHquery = "SELECT * FROM `bvrith_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM bvrith_data GROUP BY `meter_ID` ) order by `tstamp` DESC";

  db.query(BVRITHquery, function (err, result, fields) {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;
