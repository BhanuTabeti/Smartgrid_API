const express = require("express");
const {
  getReading,
  getBlockTotal,
  getBlockActivePower,
  getPowerForGraph,
  getVoltageForGraph,
  getCurrentForGraph,
  getPhasePowerForGraph,
  getPowerFactorForGraph,
  getCumulativeEnergyForGraph,
} = require("../controllers/iith");

const router = express.Router();

/* GET users listing. */
router.get("/meter", getReading);

router.get("/block-total", getBlockTotal);

router.get("/block-active-power", getBlockActivePower);

router.get("/graph/power", getPowerForGraph);

router.get("/graph/voltage", getVoltageForGraph);

router.get("/graph/current", getCurrentForGraph);

router.get("/graph/phase-power", getPhasePowerForGraph);

router.get("/graph/power-factor", getPowerFactorForGraph);

router.get("/graph/cumulative-energy", getCumulativeEnergyForGraph);
module.exports = router;
