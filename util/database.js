const Sequelize = require("sequelize");

const sequelize = new Sequelize("products-edu", "root", "@Kantslo113", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
