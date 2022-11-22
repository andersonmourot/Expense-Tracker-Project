const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Newexpense extends Model {}

Newexpense.init(
  {
    billtype: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    due_date_range: {
        type: DataTypes.RANGE(DataTypes.DATE),
        allowNull: false,
      }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Newexpense',
  }
);

module.exports = Newexpense;