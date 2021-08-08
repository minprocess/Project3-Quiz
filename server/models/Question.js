const { Schema } = require('mongoose');

const questionSchema = new Schema({
  left: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  choices: [
    {
      type: String,
    },
  ],
  right: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
  },
  learningLink: {
    type: String,
  },
  answer: [
    {
      type: String,
    }
  ]
/*
  "Left: "Vous le",
  "Choices": ["dépeinsez", "dépeinez", "dépeindez", "dépeignez'],
  "Right": " de manière très négative. (You depict him very negatively.)",
  "Hint": "HINT: Conjugate "''dépeindre"'' (to depict) in Le Présent",
  "Answer" : "dépeinez"
  */
});
module.exports = questionSchema;