const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    questions: async (parent, { limit, level }) => {
      return await Question.findRandom({level}).limit(limit).exec()
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
  Mutation: {

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log("login")
      console.log(email, password)
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUserLevel: async (parent, {id, correct, incorrect, unanswered}) => {
      const user = await User.findOneAndUpdate(
        { _id: id },
        { $set: { correct: correct, incorrect: incorrect, unanswered: unanswered } },
        { new: true }
      )
      const token = signToken(user);
      return { token, user }
    },
  },
};

module.exports = resolvers;
