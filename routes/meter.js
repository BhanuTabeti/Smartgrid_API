const express = require("express");
const { getReading, getAblockHist } = require("../controllers/meter");

const router = express.Router();

/* GET users listing. */
router.get("/", getReading);

router.get("/history", getAblockHist);

module.exports = router;
