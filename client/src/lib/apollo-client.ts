import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql", // The default port for the NestJS GraphQL server
  cache: new InMemoryCache(),
});
