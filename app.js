const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./routes/auth");
const meterRouter = require("./routes/meter");
const collegeRouter = require("./routes/colleges");

// authToken middleware
// const clientToken = require("./middlewares/clientToken.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
  Middleware call to check Authorization
*/
app.use((req, res, next) => {
  if (req.originalUrl === "/auth/createClient" || req.originalUrl === "/auth/getToken" || req.originalUrl === "/health/status") {
    next();
  } else {
    // clientToken(req, res, next);
    console.log("Token Check");
    next();
  }
});

app.use("/auth", authRouter);
app.use("/meter", meterRouter);
app.use("/college", collegeRouter);

module.exports = app;
