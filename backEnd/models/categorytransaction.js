'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryTransaction.hasMany(models.Transaction, {
        foreignKey: 'categoryTransactionId'
      })
    }
  }
  CategoryTransaction.init({
    categoryTransaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoryTransaction',
  });
  return CategoryTransaction;
};