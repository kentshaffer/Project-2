const { Goal } = require('../models');

const goalData = [
  {
    goal_name: 'Read 52 new books this year',
    goal_category: 'books',
    goal_open: true,
    user_id: 1,
  },
  {
    goal_name: 'Visit 17 countries',
    goal_category: 'travel',
    goal_open: true,
    user_id: 1,
  },
  {
    goal_name: 'Cook dinner 6x/week',
    goal_category: 'home',
    goal_open: true,
    user_id: 1,
  },
  {
    goal_name: 'Get a raise at work',
    goal_category: 'work',
    goal_open: true,
    user_id: 2,
  },
  {
    goal_name: 'Complete coding bootcamp',
    goal_category: 'skills',
    goal_open: false,
    user_id: 3,
  },
  {
    goal_name: 'Run a marathon',
    goal_category: 'fitness',
    goal_open: '',
    user_id: 3,
  },
];

const seedGoals = () => Goal.bulkCreate(goalData);

module.exports = seedGoals;
