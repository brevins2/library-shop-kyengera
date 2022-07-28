const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Phones = require("./tutorial.model.js")(sequelize, Sequelize);
db.Computers = require("./tutorial.model.js")(sequelize, Sequelize);
db.Accounts = require("./tutorial.model.js")(sequelize, Sequelize);
db.Orders = require("./tutorial.model.js")(sequelize, Sequelize);
db.Messages = require("./tutorial.model.js")(sequelize, Sequelize);
db.Delivered = require("./tutorial.model.js")(sequelize, Sequelize);
module.exports = db;

