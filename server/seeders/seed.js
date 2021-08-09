const db = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./questionSeeds.json');

db.once('open', async () => {
  try {
    await Question.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < questionSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Question.create(questionSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: questionAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
