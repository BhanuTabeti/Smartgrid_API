/*
  To generate client Token.
  Method=POST,
  Request: clientId, secret
*/

// Require JWT
const jwt = require("jsonwebtoken");
const { jwtSecret, catExpiry } = require("../../configs/jwtSecret");

// requiring DB pool
const { auth_con: db } = require("../../configs/db.js");

const sendError = require("../../utils/errorHandle");
const sendData = require("../../utils/sendData");

async function getToken(req, res) {
  const { clientId, secret } = req.body;

  if (!clientId) {
    return sendError(res, 400, "clientId is missing");
  }

  if (!secret) {
    return sendError(res, 400, "secret is missing");
  }

  // fetch ClientData from DB.
  let clientData;
  const query = `SELECT secret FROM api_client WHERE id=${db.escape(clientId)}`;
  try {
    const dbResponse = await db.query(query);
    [clientData] = dbResponse;
  } catch (err) {
    return sendError(res, 400, err);
  }

  if (clientData.secret !== secret) {
    return sendError(res, 400, "Invalid Secret");
  }

  let clientToken;
  try {
    clientToken = await jwt.sign(
      { clientId, secret },
      jwtSecret,
      { expiresIn: catExpiry }
    );
  } catch (err) {
    return sendError(res, 400, err);
  }

  return sendData(res, 200, { clientToken });
}

module.exports = getToken;
