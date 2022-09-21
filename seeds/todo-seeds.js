const { Todo } = require('../models');

const todoData = [
  {
    todo_name: 'Candide',
    todo_open: true,
    goal_id: 1,
  },
  {
    todo_name: 'The Iliad',
    todo_open: true,
    goal_id: 1,
  },
  {
    todo_name: 'House of leaves',
    todo_open: true,
    goal_id: 1,
  },
  {
    todo_name: 'Portugal',
    todo_open: true,
    goal_id: 2,
  },
  {
    todo_name: 'Buy groceries',
    todo_open: true,
    goal_id: 3,
  },
  {
    todo_name: 'Complete all Q3 projects on time',
    todo_open: true,
    goal_id: 4,
  },
  {
    todo_name: 'Finish module challenge',
    todo_open: true,
    goal_id: 5,
  },
  {
    todo_name: 'Go jogging',
    todo_open: true,
    goal_id: 6,
  },
  {
    todo_name: 'Run a 5k',
    todo_open: false,
    goal_id: 6,
  },
];

const seedTodos = () => Todo.bulkCreate(todoData);

module.exports = seedTodos;
