"use strict";
const { Model } = require("sequelize");
const { changePassword } = require("../helper/bcrypt");
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
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please input an email",
          },
          notNull: {
            args: true,
            msg: "Please input an email",
          },
          isEmail: {
            args: true,
            msg: "Please input a valid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please input a password",
          },
          notNull: {
            args: true,
            msg: "Please input a password",
          },
          len: {
            args: [5],
            msg: "Please input a password with at least 5 characters",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please input an username",
          },
          notNull: {
            args: true,
            msg: "Please input an username",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (User) => {
          User.password = changePassword(User.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
