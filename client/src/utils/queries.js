import { gql } from '@apollo/client';

/*
  type Query {
    users: [User]
    user(username: String!): User
    me: User
    questions: [Question]
    question(number: Int): Question
  }
*/

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
      _id
      number
      questionType
      left
      choices
      right
      answer
      learningLink
      level
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
