const mysql = require("mysql");

//To do - add exceptions for connection errors

var pool = {};

pool.auth_con = mysql.createPool({
  host: process.env.AUTH_DB_HOST,
  port: process.env.AUTH_DB_PORT,
  user: process.env.AUTH_DB_USER,
  password: process.env.AUTH_DB_PASSWORD,
  database: process.env.AUTH_DB
});

pool.vvit_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.VVIT_DB
});

pool.ouce_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.OUCE_DB
});


pool.gnit_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.GNITS_DB
});


pool.pvpsit_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.PVPSIT_DB
});


pool.demo_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DEMO_DB
});

pool.bvrith_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.BVRITH_DB
});

pool.root_con = mysql.createPool({
  host: process.env.ROOT_DB_HOST,
  port: process.env.ROOT_DB_PORT,
  user: process.env.ROOT_DB_USER,
  password: process.env.ROOT_DB_PASSWORD,
  database: process.env.ROOT_DB
});

pool.bh_con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.IITH_SS_DB
});

module.exports = pool;