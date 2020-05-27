const { iith_ss_con: db } = require("../configs/db.js");

const sendData = require("../utils/sendData");
// const sendError = require("../utils/errorHandle");

const iithSS = {};

// iithSS.getActivePower = async function (req, res) {
//   // console.log("received query for A block total");

//   const query = `SELECT SSname, Ptot as power ,UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(date) as time_elapsed FROM sensorreadings WHERE id IN ( SELECT MAX(id) FROM sensorreadings GROUP BY row2 ) AND block = ${db.escape(blockString)} order by row2`;

//   db.query(query, (err, result) => {
//     if (err) res.status(500).send(err);

//     return sendData(res, 200, result);
//     // console.log("server sending A block historical data");
//   });
// };

iithSS.getPowerForGraph = async function (req, res) {
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

    return sendData(res, 200, result);
  });
};

iithSS.getVoltageForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT Rph as r, Yph as y, Bph as b, row2, date as x
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
    return sendData(res, 200, result);
  });
};

iithSS.getCurrentForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT Ir as r, Iy as y, Ib as b, row2, date as x
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
    return sendData(res, 200, result);
  });
};

iithSS.getPhasePowerForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT Pr as r, Py as y, Pb as b, row2, date as x
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
    return sendData(res, 200, result);
  });
};

iithSS.getPowerFactorForGraph = async function (req, res) {
  const { panel } = req.query;

  const query = `
    SELECT  * 
    FROM (SELECT Pfr as r, Pfy as y, Pfb as b, row2, date as x
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
    return sendData(res, 200, result);
  });
};

iithSS.getCumulativeEnergyForGraph = async function (req, res) {
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
    return sendData(res, 200, result);
  });
};

module.exports = iithSS;
