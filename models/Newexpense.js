const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Newexpense extends Model {}

// Newexepnse model with the attributes for the user's expenses
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
      allowNull: true,
      primaryKey: true,
      defaultValue: 'rent'
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 5.6
    },
    due_date_range: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: 567834
    },
    description: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
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
