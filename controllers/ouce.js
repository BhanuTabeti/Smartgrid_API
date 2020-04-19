const { ouce_con: db } = require("../configs/db.js");

const meter = {};

meter.getOUCEdata = async function (req, res) {
  console.log("received query for OUCE data");

  const OUCEquery = "SELECT * FROM `ou_data` WHERE `tstamp` IN ( SELECT MAX(`tstamp`) FROM ou_data GROUP BY `meter_ID` ) order by `meter_ID`";

  db.query(OUCEquery, (err, result) => {
    if (err) res.status(500).send(err);
    res.json(result);
    console.log(result);
  });
};

module.exports = meter;
