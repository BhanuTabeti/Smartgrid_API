const express = require("express");
const { getReading, getBlockTotal } = require("../controllers/meter");

const router = express.Router();

/* GET users listing. */
router.get("/", getReading);

router.get("/blocktotal", getBlockTotal);

module.exports = router;
