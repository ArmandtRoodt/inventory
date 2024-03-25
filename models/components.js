'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Components extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Components.init({
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    costPrice: DataTypes.DECIMAL,
    retailPrice: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Components',
  });
  return Components;
};