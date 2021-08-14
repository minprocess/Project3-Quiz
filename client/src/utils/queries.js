import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      level
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query getQuestions($level: String, $limit: Int) {
    questions(level: $level, limit: $limit) {
      number
      left
      right
      choices
      translation
      hint
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
      level
    }
  }
`;
