'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('users', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userCode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  user.sync();

  return user;
};
