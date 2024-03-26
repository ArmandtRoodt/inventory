'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wheels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wheels.init({
    size: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    costPrice: DataTypes.DECIMAL,
    retailPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Wheels',
  });
  return Wheels;
};