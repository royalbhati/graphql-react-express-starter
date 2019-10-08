import { gql } from "apollo-server-express";

export const dog = gql`
  type Query {
    dogs: [Dog!]!
  }

  type Dog {
    id: ID!
    name: String!
  }

  type Mutation {
    createDog(name: String!): Dog!
  }
`;
