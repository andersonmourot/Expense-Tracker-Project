const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Newexpense extends Model {}

Newexpense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Newexpense",
  }
);

module.exports = Newexpense;
