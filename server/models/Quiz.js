const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quizSchema = new Schema({
  quizNumber: 
  description: {
    type:String,
  },
  questions: [

  ],

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