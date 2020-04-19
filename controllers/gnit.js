const { gnit_con: db } = require("../configs/db.js");

const meter = {};

meter.getGNITdata = async function (req, res) {
  console.log("received query for GNIT data");

  const GNITquery = "SELECT * FROM `gnits_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM gnits_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(GNITquery, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

// meter.getGNITdataPeak = async function (req, res) {
//   console.log("recieved query for GNIT peak datas");
//   var i;
//   const resultsArray = [];
//   for (i = 2; i < 13; i++){
//     // To do
//     const GNITpeakQuery = `SELECT tstamp, meter_ID, Ptot FROM gnits_data WHERE Ptot =( SELECT MAX(Ptot) FROM gnits_data WHERE DATE(tstamp) = CURDATE()-1 AND meter_ID = ${db.escape(i)} ) AND DATE(tstamp) = CURDATE()-1 AND meter_ID = ${db.escape(i)}`

//     db.query(GNITpeakQuery, (err, result) => {
//       if (err) {
//         console.log("No data recieved")
//         return res.status(500).send(err);
//       }
//       resultsArray.push(result);
//     });
//   }
//   res.json(resultsArray);
//   if (resultsArray.len){
//     console.log("Results have been sent");
//     res.json(resultsArray);
//   }
// };

module.exports = meter;
