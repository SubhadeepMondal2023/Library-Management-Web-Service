import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Make sure your backend is running
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
