const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Signin extends Model {}

Signin.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Signin',
  }
);

module.exports = Signin;
