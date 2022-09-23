const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    todo_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    todo_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    goal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'goal',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = Todo;
