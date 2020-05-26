const { root_con: db } = require("../configs/db.js");

const sendData = require("../utils/sendData");
// const sendError = require("../utils/errorHandle");

const iith = {};

iith.getReading = async function (req, res) {
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

iith.getBlockTotal = async function (req, res) {
  // console.log("received query for A block total");
  const { block } = req.query;

  const aQuery = `SELECT * FROM block_totals WHERE tstamp = (select max(tstamp) from block_totals) AND block_code = ${db.escape(block)}`;

  db.query(aQuery, (err, result) => {
    if (err) res.status(500).send(err);

    return sendData(res, 200, result[0]);
    // console.log("server sending A block historical data");
  });
};

iith.getBlockActivePower = async function (req, res) {
  // console.log("received query for A block total");
  const { block } = req.query;
  let blockString;

  // Change this an Util or Something
  if (block === "A") {
    blockString = "Block_A";
  } else if (block === "B") {
    blockString = "Block_B";
  } else if (block === "C") {
    blockString = "Block_C";
  }

  const query = `SELECT row2 as panel, total_active_power as power ,UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(date) as time_elapsed FROM sensorreadings WHERE id IN ( SELECT MAX(id) FROM sensorreadings GROUP BY row2 ) AND block = ${db.escape(blockString)} order by row2`;

  db.query(query, (err, result) => {
    if (err) res.status(500).send(err);

    return sendData(res, 200, result);
    // console.log("server sending A block historical data");
  });
};

iith.getPowerForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT total_active_power as y, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

iith.getVoltageForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT r_phase_voltage as r, y_phase_voltage as y, b_phase_voltage as b, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

iith.getCurrentForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT r_phase_current as r, y_phase_current as y, b_phase_current as b, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

iith.getPhasePowerForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT r_phase_active_power as r, y_phase_active_power as y, b_phase_active_power as b, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

iith.getPowerFactorForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT total_power_factor as y, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

iith.getCumulativeEnergyForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT cumulative_energy_KWh as y, row2, date as x
    FROM sensorreadings
    WHERE row2 = ${db.escape(panel)}
    ORDER BY date DESC
    LIMIT 280) AS a
    ORDER BY x ASC
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(result);
  });
};

module.exports = iith;
