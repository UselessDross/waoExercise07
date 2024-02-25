// server.ts

import { ApolloServer } from 'apollo-server';
import resolvers from '../data/graphql/resolvers'; // Import your resolver map
import { typeDefs } from '../data/graphql/typeDefs'; // Import your GraphQL schema file

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Other server configurations...
});

server.listen().then(({ url }: { url: string }) => {
    console.log(`Server ready at ${url}`);
  });
  