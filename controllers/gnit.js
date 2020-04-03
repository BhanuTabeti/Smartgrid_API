var express = require('express');
var { gnit_con: db } = require('../configs/db.js');

var meter = {};

meter.getGNITdata = async function (req, res) {
  console.log('received query for GNIT data');

  const GNITquery = "SELECT * FROM `gnits_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM gnits_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(GNITquery, function (err, result, fields) {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

meter.getGNITdataPeak = async function (req, res) {
  console.log('recieved query for GNIT peak datas');
  var i;
  const resultsArray = [];
  for (i = 2; i < 13; i++){
    const GNITpeakQuery = `SELECT tstamp, meter_ID, Ptot FROM gnits_data WHERE Ptot =( SELECT MAX(Ptot) FROM gnits_data WHERE DATE(tstamp) = CURDATE()-1 AND meter_ID = ${db.escape(i)} ) AND DATE(tstamp) = CURDATE()-1 AND meter_ID = ${db.escape(i)}`

    db.query(GNITpeakQuery, function (err, result, fields) {
      if (err) {
        res.status(500).send(err);
        console.log('No data recieved')
        resultsArray.push(err)        
      }
      else resultsArray.push(result);
    });
  }
  res.json(resultsArray);
  console.log('Results have been sent');
};

module.exports = meter;
