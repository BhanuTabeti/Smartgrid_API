const express = require("express");
const requestLogin = require("../controllers/auth/requestLogin");
const getToken = require("../controllers/auth/getToken");

const router = express.Router();
router.post("/getToken", getToken);
router.post("/login", requestLogin);

module.exports = router;
