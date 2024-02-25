const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "products-edu",
  password: "@Kantslo113",
});

module.exports = pool.promise();
