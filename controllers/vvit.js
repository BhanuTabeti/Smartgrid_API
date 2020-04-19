const { vvit_con: db } = require("../configs/db.js");

const meter = {};

meter.getVVITdata = async function (req, res) {
  console.log("received query for VVIT data");

  const VVITquery = "SELECT * FROM `vvit_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM vvit_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(VVITquery, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;
