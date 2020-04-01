const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB
});

exports.pool = pool;
