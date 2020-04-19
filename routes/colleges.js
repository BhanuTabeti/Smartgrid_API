const express = require("express");

const { getVVITdata } = require("../controllers/vvit");
const { getOUCEdata } = require("../controllers/ouce");
const { getDemoData } = require("../controllers/demo");
const { getBvrithData } = require("../controllers/bvrith");
const { getGNITdata, getGNITdataPeak } = require("../controllers/gnit");
const { getPVPSITdata, getPVPSITdataPeak } = require("../controllers/pvpsit");

const router = express.Router();

/* GET users listing. */
router.get("/vvit", getVVITdata);
router.get("/ouce", getOUCEdata);
router.get("/gnit", getGNITdata);
router.get("/gnit_peak", getGNITdataPeak);
router.get("/pvpsit", getPVPSITdata);
router.get("/pvpsit_peak", getPVPSITdataPeak);
router.get("/bvrith", getBvrithData);
router.get("/demo", getDemoData);

module.exports = router;
