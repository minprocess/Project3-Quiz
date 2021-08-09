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

  },
/*
  quit
  description: String,
  Questions[
  Text left
  Menu
  Choice[ ]
  Answer
  Hint
*/
})