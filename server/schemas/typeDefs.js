const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }


  type Question {
    number: Number
    questionType: String
    left: String
    choices: [String]
    right: String
    translation: String
    hint: String
    answer: [String]
    learningLink: String
    level: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    questions: [Question]
    question(number: Number): Question
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
