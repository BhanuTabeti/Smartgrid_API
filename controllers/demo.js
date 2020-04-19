const { demo_con: db } = require("../configs/db.js");

const meter = {};

meter.getDemoData = async function (req, res) {
  console.log("received query for Demo data");

  const demoQuery = "SELECT * FROM `meter_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM meter_data GROUP BY `meter_ID` ) order by `tstamp` DESC";

  db.query(demoQuery, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;
