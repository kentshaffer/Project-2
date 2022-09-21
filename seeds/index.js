const sequelize = require('../config/connection');
const seedGoals = require('./goal-seeds');
const seedTodos = require('./todo-seeds');
const userData = require('./user-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedGoals();

  await seedTodos();

  process.exit(0);
};

seedAll();
