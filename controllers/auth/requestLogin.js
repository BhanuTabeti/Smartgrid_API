const { google } = require("googleapis");
// const jwt = require("jsonwebtoken");

// const { jwtSecret, uatExpiry } = require("../../configs/jwtSecret");
const { googleClientId, googleClientSecret } = require("../../configs/googleSecret");

// Google's OAuth2 client
const { OAuth2 } = google.auth;

// const sendError = require("../../utils/errorHandle");
const sendData = require("../../utils/sendData");

async function requestLogin(req, res) {
  const oauth2Client = new OAuth2(
    googleClientId,
    googleClientSecret,
    "http://localhost:5000/login"
  );

  console.log(googleClientId);
  const loginLink = oauth2Client.generateAuthUrl({
    access_type: "offline", // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: ["email", "profile"]
  });

  return sendData(res, 200, { loginLink });
}

module.exports = requestLogin;
