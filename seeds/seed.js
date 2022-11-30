const sequelize = require('../config/connection');
const { User, Newexpense } = require('../models');

const userData = require('./userData.json');
const expenseData = require('./expenseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const expense of expenseData) {
    await Newexpense.create({
      ...expense,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();