const mysql = require("mysql");

//To do - add exceptions for connection errors

var pool = {};

pool.vvit_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.VVIT_DB
});

pool.ouce_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.OUCE_DB
});


pool.gnits_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.GNITS_DB
});


pool.pvpsit_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.PVPSIT_DB
});


pool.demo_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DEMO_DB
});

pool.demo_bvrith_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.BVRITH_DB
});

pool.root_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.ROOT_PORT,
	user: process.env.ROOT_USER,
	password: process.env.ROOT_PASSWORD,
	database: process.env.ROOT_DBs
});

pool.bh_con = mysql.createPool({
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.IITH_SS_DB
});

module.exports = pool;
