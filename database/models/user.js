'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    Name: DataTypes.TEXT,
    password: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    occupation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};