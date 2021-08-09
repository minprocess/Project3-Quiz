const { Schema, model } = require('mongoose');
var random = require('mongoose-random');


/*
    "Number": 19,
    "QuestionType": "",
    "Left": "Oui, ",
    "Choices": [],
    "Right": " avec toi",
    "Translation": "Yes, I agree with you.",
    "Hint": "",
    "Answer": "je suis d'accord",
    "LearningLink": "Être d'accord avec = to agree with",
    "Level": "A1"

*/

const questionSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  left: {
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
  translation: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
  answer: [
    {
      type: String,
      required: true,
    }
  ],
  learningLink: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
/*
  "Left: "Vous le",
  "Choices": ["dépeinsez", "dépeinez", "dépeindez", "dépeignez'],
  "Right": " de manière très négative. (You depict him very negatively.)",
  "Hint": "HINT: Conjugate "''dépeindre"'' (to depict) in Le Présent",
  "Answer" : "dépeinez"
  */
});
 
questionSchema.plugin(random, { path: 'r' }); // by default `path` is `random`. It's used internally to store a random value on each doc.

const Question = model('Question', questionSchema);

module.exports = Question;
