const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'youngdeveloper', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
