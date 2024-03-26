'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tyres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tyres.init({
    size: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    costPrice: DataTypes.DECIMAL,
    retailPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Tyres',
  });
  return Tyres;
};