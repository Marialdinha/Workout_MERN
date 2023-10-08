const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    activities: [Activity]
  }

  type Activity {
    _id: ID
    name: String
    duration: String
    date: String
    notes: String
  }

  type Query {
    me: User
    activities: [Activity]!
    activity(activityId: ID!): Activity
  }

  type Auth {
    token: ID!
    user: User
  }

  input ActivityInput {
    name: String
    duration: String
    date: String
    notes: String
  }

  type Mutation {
    addUser(userName: String!): Auth
    login(userName: String!, password: String!): Auth

    addActivity(input: ActivityInput): User
    removeActivity(_id: ID!): User
    updateActivity(_id: ID!): User
  }
`;

module.exports = typeDefs;
