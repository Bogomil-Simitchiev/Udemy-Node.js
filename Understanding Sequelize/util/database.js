const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Here is your password in workbench', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
