const { auth_con: db } = require("../configs/db");

// User object constructor (Define what need to insert in User table, here)
const User = {};
/*
  set default workspace if User do not have any.
*/
User.create = async function (data) {
  const {
    UserId, Username, Password
  } = data;

  const machine = new Promise((resolve, reject) => {
    const query = `
      INSERT INTO User(UserId, Username, Password)
      VALUES(
        ${db.escape(UserId)},${db.escape(Username)},${db.escape(Password)}}
      )`;

    db.query(query, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });

  return machine;
};

User.getById = async function (data) {
  const { UserId } = data;

  const machine = new Promise((resolve, reject) => {
    const query = `SELECT * FROM User WHERE UserId=${db.escape(UserId)}`;

    db.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } if (!result[0]) {
        const e = new Error("Wrong Credentials");
        return reject(e.message);
      }
      return resolve(result[0]);
    });
  });

  return machine;
};

User.getByUsername = async function (Username) {
  const machine = new Promise((resolve, reject) => {
    const query = `SELECT * FROM User WHERE Username=${db.escape(Username)} AND Deleted=0`;

    db.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } if (!result[0]) {
        const e = new Error("Wrong Credentials");
        return reject(e.message);
      }
      // console.log(result);
      return resolve(result[0]);
    });
  });

  return machine;
};

User.getAll = async function () {
  const machine = new Promise((resolve, reject) => {
    const query = "SELECT * FROM User";

    db.query(query, (err, result) => {
      if (err) {
        return reject(err);
      } if (!result[0]) {
        const e = new Error("Wrong Credentials");
        return reject(e.message);
      }
      return resolve(result);
    });
  });

  return machine;
};

// DON'T PASS EMPTY VALUES OR IT'LL BECOME NULL
User.update = async function (data) {
  const {
    UserId, Username, Password
  } = data;

  const machine = new Promise((resolve, reject) => {
    const query = `
      UPDATE User
      SET Username = ${db.escape(Username)},
      Password = ${db.escape(Password)},
      WHERE UserId = ${db.escape(UserId)} AND Deleted=0
    `;

    db.query(query, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });

  return machine;
};

User.delete = async function (data) {
  const { UserId } = data;

  const machine = new Promise((resolve, reject) => {
    const query = `UPDATE User SET Deleted = 1 WHERE UserId=${db.escape(UserId)}`;

    db.query(query, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });

  return machine;
};

module.exports = User;
