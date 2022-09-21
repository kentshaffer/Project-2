const sequelize = require('../config/connection');
const seedGoals = require('./goal-seeds');
const seedTodos = require('./todo-seeds');
const userData = require('./user-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await seedGoals();

  await seedTodos();

  process.exit(0);
};

seedAll();
