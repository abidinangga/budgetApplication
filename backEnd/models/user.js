'use strict';
const {
  Model
} = require('sequelize');
const {changePassword} = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(User)=>{
        User.password = changePassword(User.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};