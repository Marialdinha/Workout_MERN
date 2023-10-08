const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    activities: [Activity]
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Activity {
    _id: ID
    name: String
    duration: String
    date: String
    notes: String
  }

  input ActivityInput {
    name: String
    duration: String
    date: String
    notes: String
  }

  type Query {
    activities: [Activity]!
    activity(activityId: ID!): activity
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
