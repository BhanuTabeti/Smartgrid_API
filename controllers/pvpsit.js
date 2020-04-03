var express = require('express');
var { pvpsit_con: db } = require('../configs/db.js');

var meter = {};

meter.getPVPSITdata = async function (req, res) {
  console.log('received query for PVPSIT data');

  const PVPSITquery = "SELECT * FROM `pvpsit_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM pvpsit_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(PVPSITquery, function (err, result, fields) {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

meter.getPVPSITdataPeak = async function (req, res) {
  console.log('recieved query for PVPSIT peak datas');
  const PVPSITpeakQuery = "SELECT `tstamp`,`meter_ID`, `Ptot` FROM `pvpsit_data` WHERE `Ptot` =( SELECT MAX(`Ptot`) FROM `pvpsit_data` WHERE DATE(`tstamp`) = '2019-11-05' ) and DATE(`tstamp`) = '2019-11-05'";
  db.query(PVPSITpeakQuery, function (err, result, fields) {
      if (err) res.status(500).send(err);
      res.json(result);
      console.log('Peaks have been sent');
    });
};

module.exports = meter;
