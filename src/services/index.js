'use strict';
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    dialectOptions: { ssl: app.get('connection_method').ssl },
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
};
