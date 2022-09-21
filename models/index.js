const User = require('./User');
const Goal = require('./Goal');
const Todo = require('./To-do');

User.hasMany(Goal, {
  foreignKey: 'user_id',
});

Goal.hasMany(Todo, {
  foreignKey: 'goal_id',
});

Todo.belongsTo(Goal, {
  foreignKey: 'goal_id',
});

Goal.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Goal, Todo };
