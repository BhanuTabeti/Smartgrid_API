const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST || "default value",
  user: process.env.USERNAME || "default value",
  password: process.env.PASSWORD || "default value",
  database: process.env.DB || "default value"
});

exports.pool = pool;
