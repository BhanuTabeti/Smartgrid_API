const mysql = require("mysql");

//To do - add exceptions for connection errors

var pool = {};

pool.vvit_con = mysql.createPool({
<<<<<<< HEAD
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
=======
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.VVIT_DB,
	socketPath: process.env.SOCKETPATH
});

pool.ouce_con = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.OUCE_DB,
	socketPath: process.env.SOCKETPATH
>>>>>>> ea439899e249a9b2457fb483fc774691ac91e60f
});


pool.gnits_con = mysql.createPool({
<<<<<<< HEAD
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.GNITS_DB
=======
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.GNITS_DB,
	socketPath: process.env.SOCKETPATH
>>>>>>> ea439899e249a9b2457fb483fc774691ac91e60f
});


pool.pvpsit_con = mysql.createPool({
<<<<<<< HEAD
	host: process.env.HOST,
	port: process.env.PORT,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.PVPSIT_DB
=======
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.PVPSIT_DB,
	socketPath: process.env.SOCKETPATH
>>>>>>> ea439899e249a9b2457fb483fc774691ac91e60f
});


pool.demo_con = mysql.createPool({
<<<<<<< HEAD
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
=======
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DEMO_DB,
	socketPath: process.env.SOCKETPATH
});

pool.demo_bvrith_con = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.BVRITH_DB,
	socketPath: process.env.SOCKETPATH
>>>>>>> ea439899e249a9b2457fb483fc774691ac91e60f
});

pool.root_con = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.ROOT_PORT,
	user: process.env.ROOT_USER,
	password: process.env.ROOT_PASSWORD,
	database: process.env.ROOT_DBs
});

pool.bh_con = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.IITH_SS_DB
});

module.exports = pool;
