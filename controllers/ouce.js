var express = require('express');
var { ouce_con: db } = require('../configs/db.js');

var meter = {};

meter.getOUCEdata = async function (req, res) {
  console.log('received query for OUCE data');

  const OUCEquery = "SELECT * FROM `ou_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM ou_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(OUCEquery, function (err, result, fields) {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;