import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  // query allUsers {
  //   user {
  //     _id
  //     userName
  //    
  //   }
  // }
`;

export const QUERY_SINGLE_USER = gql`
  // query me($userId: ID!) {
  //   user(userId: $userId) {
  //     _id
  //    userName
  //    email
  //   }
  // }
`;
