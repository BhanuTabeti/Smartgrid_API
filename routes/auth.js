const express = require("express");
const router = express.Router();

const requestLogin = require("../controllers/auth/requestLogin");
const getToken = require("../controllers/auth/getToken");

router.post("/getToken", getToken);
router.post("/login", requestLogin);

module.exports = router;
