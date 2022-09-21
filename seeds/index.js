const sequelize = require('../config/connection');
const seedGoals = require('./goal-seeds');
const seedTodos = require('./todo-seeds');
const seedUsers = require('./user-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedGoals();

  await seedTodos();

  process.exit(0);
};

seedAll();
