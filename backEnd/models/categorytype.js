'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryType.hasMany(models.Transaction, {
        foreignKey: 'categoryTypeId'
      })
      CategoryType.belongsTo(models.CategoryTransaction, {
        foreignKey: 'categoryTransactionId'
      })
    }
  }
  CategoryType.init({
    categoryType: DataTypes.STRING,
    categoryTransactionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CategoryType',
  });
  return CategoryType;
};