const express = require("express");
const requestLogin = require("../controllers/auth/requestLogin");
const acceptLogin = require("../controllers/auth/acceptLogin");
const getToken = require("../controllers/auth/getToken");

const router = express.Router();
router.post("/getToken", getToken);
router.get("/login", requestLogin);
router.post("/login", acceptLogin);

module.exports = router;
