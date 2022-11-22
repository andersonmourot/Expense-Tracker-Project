const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paid extends Model {}

Paid.init(
  {
    bill_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      primaryKey: true,
      allowNull: false,
    },
    date_paid:{
        type: DataTypes.RANGE(DataTypes.DATE),
        allowNull: false,
        primaryKey: true,
      }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'library_card',
  }
);

module.exports = Paid;