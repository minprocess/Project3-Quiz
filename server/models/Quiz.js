const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quizSchema = new Schema({
  quizNumber: {
    type: Number,
  },
  description: {
    type: String,
  },
  numberCorrect: {
    type: Number,
  },
  numberIncorrect: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
})

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;