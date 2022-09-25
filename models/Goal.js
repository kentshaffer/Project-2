const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Goal extends Model {}

Goal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    goal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goal_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    goal_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    date_created: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goal',
  }
);

module.exports = Goal;
