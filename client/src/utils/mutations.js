import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//updateUserLevel(id: ID!, correct: Int, incorrect: Int, unanswered: Int): Auth

export const UPDATE_USER_LEVEL = gql`
  mutation updateUswerLevel($id: ID!, $correct: Int, $incorrect: String, $unanswered: Int) {
    updateUserLevel(id: $id, correct: $correct, incorrect: $incorrect, unanswered:$unanswered)
      token
      user {
        _id
        username
        correct
        incorrect
        unanswered
      }
    }
  }
`;

