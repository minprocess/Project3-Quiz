const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    level: String
  }

  type Question {
    number: String
    questionType: String
    left: String
    choices: [String]
    right: String
    translation: String
    hint: String
    answer: String
    learningLink: String
    level: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    questions(limit: Int, level: String): [Question]
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
