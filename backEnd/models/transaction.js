'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Transaction.belongsTo(models.CategoryTransaction, {
        foreignKey: 'categoryTransactionId'
      })
      Transaction.belongsTo(models.CategoryType, {
        foreignKey: 'categoryTypeId'
      })
    }
  }
  Transaction.init({
    transactionAmount:{
      type: DataTypes.INTEGER,
      allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please input an transaction amount ",
          },
          notNull: {
            args: true,
            msg: "Please input an transaction amount",
          },
        },
    },

    description: {
     type: DataTypes.TEXT,
     allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Please input an description",
          },
          notNull: {
            args: true,
            msg: "Please input an description",
          },
        },
    },
    userId: DataTypes.INTEGER,
    categoryTransactionId: DataTypes.INTEGER,
    categoryTypeId: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};