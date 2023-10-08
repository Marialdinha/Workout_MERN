import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($userName: String!) {
    addUser(userName: $name) {
      _id
      userName
      email
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity($userId: ID!, $activity: String!) {
    addSkill(userId: $userId, activiy: $activity) {
      _id
      duration
      date
      notes
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

// Still need:
// removeActivity
// updateActivity