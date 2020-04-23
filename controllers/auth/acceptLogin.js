const { google } = require("googleapis");
const jwt = require("jsonwebtoken");

const { jwtSecret, uatExpiry } = require("../../configs/jwtSecret");
const { googleClientId, googleClientSecret } = require("../../configs/googleSecret");

// Google's OAuth2 client
const { OAuth2 } = google.auth;

const sendError = require("../../utils/errorHandle");
const sendData = require("../../utils/sendData");

async function requestLogin(req, res) {
  const oauth2Client = new OAuth2(
    googleClientId,
    googleClientSecret,
    "http://localhost:5000/login"
  );

  oauth2Client.getToken(req.body.code, async (err, token) => {
    if (err) {
      console.log(err);
      return sendError(res, 400, err);
    }

    oauth2Client.credentials = token;

    // console.log(token);
    const oauth2 = google.oauth2("v2");
    oauth2.userinfo.get({ auth: oauth2Client }, async (e, response) => {
      if (e) {
        console.log(e);
        return sendError(res, 400, e);
      }
      // console.log(response.data);

      const payload = {
        userId: response.data.id
      };
      const verifyOptions = {
        expiresIn: uatExpiry, // expires in 24h
      };

      // create user access token
      let jwttoken;
      try {
        jwttoken = await jwt.sign(payload, jwtSecret, verifyOptions);
      } catch (erro) {
        return sendError(res, 400, erro);
      }

      const accessToken = jwttoken;
      // return the JWT token for the future API calls
      return sendData(res, 200, {
        accessToken
      });
    });
  });
}

module.exports = requestLogin;
