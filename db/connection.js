const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dashboard55!!",
  database: "test",
});

module.exports = db;
