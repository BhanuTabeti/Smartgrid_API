const { root_con: db } = require("../configs/db.js");

const meter = {};

meter.getReading = async function (req, res) {
  const { block, meterId } = req.query;
  let blockString;

  // Change this an Util or Something
  if (block === "A") {
    blockString = "Block_A";
  } else if (block === "B") {
    blockString = "Block_B";
  } else if (block === "C") {
    blockString = "Block_C";
  }

  const query = `SELECT * FROM sensorreadings WHERE date = (SELECT MAX(date) FROM sensorreadings WHERE meter_number = ${db.escape(meterId)} AND block = ${db.escape(blockString)}) AND meter_number = ${db.escape(meterId)}`;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

meter.getBlockTotal = async function (req, res) {
  console.log("received query for A block total");

  const aQuery = "SELECT * FROM `block_totals` order by tstamp desc limit 120";

  db.query(aQuery, (err, result) => {
    if (err) res.status(500).send(err);

    res.send(result);
    console.log("server sending A block historical data");
  });
};

module.exports = meter;
