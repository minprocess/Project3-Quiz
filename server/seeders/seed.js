const db = require('../config/connection');
const { User, Question } = require('../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json');

db.once('open', async () => {
  try {
    await Question.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds[0]);
    await User.create(userSeeds[1]);

    for (let i = 0; i < questionSeeds.length; i++) {
      await Question.create(questionSeeds[i]);

    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
