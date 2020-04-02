const mysql = require("mysql");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: process.env.HOST || "default value",
//   user: process.env.USERNAME || "default value",
//   password: process.env.PASSWORD || "default value",
//   database: process.env.DB || "default value"
// });

// exports.pool = pool;

var pool = {};

pool.vvit_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.VVIT_DB,
	socketPath: process.env.SOCKETPATH
});

pool.ouce_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.OUCE_DB,
	socketPath: process.env.SOCKETPATH
});


pool.gnits_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.GNITS_DB,
	socketPath: process.env.SOCKETPATH
});


pool.pvpsit_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.PVPSIT_DB,
	socketPath: process.env.SOCKETPATH
});


pool.demo_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DEMO_DB,
	socketPath: process.env.SOCKETPATH
});

pool.demo_bvrith_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.BVRITH_DB,
	socketPath: process.env.SOCKETPATH
});

pool.root_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.ROOT_PORT,
	user: process.env.ROOT_USER,
	password: process.env.ROOT_PASSWORD,
	database: process.env.ROOT_DB,
	socketPath: process.env.SOCKETPATH
});

pool.bh_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.IITH_SS_DB
});

module.exports = pool