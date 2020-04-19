const crypto = require("crypto");

// Require JWT
const jwt = require("jsonwebtoken");
const { jwtSecret, uatExpiry } = require("../../configs/jwtSecret");

// requiring DB models
const User = require("../../models/user");

const sendError = require("../../utils/errorHandle");
const sendData = require("../../utils/sendData");

async function requestLogin(req, res) {
  const { username } = req.body;
  let { password } = req.body;
  // check for empty fields
  if (!username || !password) {
    return sendError(res, 400, "username or password missing");
  }
  // fetch user from DB
  let getUser;
  try {
    getUser = await User.getByUsername(username);
  } catch (err) {
    return sendError(res, 400, err);
  }
  // Hash received password
  password = crypto.createHash("sha512").update(password).digest("hex");
  if (username === getUser.Username && password === getUser.Password) {
    const payload = {
      userId: getUser.id
    };
    const verifyOptions = {
      expiresIn: uatExpiry, // expires in 24h
    };

    // create user access token
    let token;
    try {
      token = await jwt.sign(payload, jwtSecret, verifyOptions);
    } catch (err) {
      return sendError(res, 400, err);
    }
    // return the JWT token for the future API calls
    return sendData(res, 200, {
      accessToken: token,
      // defaultPage: getUser.DefaultPage,
      // stageTypeId: getUser.StageTypeId,
      // workerId: getUser.WorkerId
    });
  }
  return sendError(res, 403, "Incorrect password");
}

module.exports = requestLogin;
