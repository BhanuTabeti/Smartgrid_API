/*
 clientToken.js: This is a middleware and will check for client access token in every api call.
 An user access token must be supplied in header with key Authorization. No API endpoint will
 be accessed if client access token is not in header.
 Author: Yer Mom
*/

/* eslint-disable consistent-return, prefer-destructuring */
// require JWT & jwtConfig
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../configs/jwtSecret");

// error handler
const { sendError } = require("../utils/errorHandle");

// requiring DB pool
// const { auth_con: db } = require("../configs/db.js");

const clientToken = async (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers.authorization; // Express headers are auto converted to lowercase
  if (token) {
    let decoded;
    try {
      decoded = jwt.verify(token, jwtSecret);
    } catch (err) {
      return sendError(res, 400, err);
    }
    const { clientId } = decoded;
    // const query = `SELECT grant_type,scope FROM api_client WHERE id=${db.escape(clientId)}`;
    // try {
    //   const dbResponse = await db.query(query);
    //   const [clientData] = dbResponse;
    //   if (typeof clientData === "undefined") {
    //     return sendError(res, 400, "Wrong Client Token");
    //   }
    //   const { scope } = clientData;
    //   let url = req.originalUrl.split("/")[1];

    //   // handle scope for clients, whome urls start from
    //   // /client/xyz/
    //   if (url === "/client") {
    //     url = req.originalUrl.split("/")[3];
    //   }
    //   // check for scope
    //   if (!scope.includes(url)) {
    //     return sendError(res, 400, "Not in scope");
    //   }
    // } catch (err) {
    //   return sendError(res, 400, err);
    // }
    req.clientId = clientId;
    next();
  } else {
    return sendError(res, 400, "Authorization token is not supplied");
  }
};

module.exports = clientToken;
