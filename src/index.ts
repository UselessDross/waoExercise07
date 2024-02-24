import bodyParser from 'body-parser';
// import express from 'express';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../data/graphql/typeDefs';
import resolvers from '../data/graphql/resolvers';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀  Apollo GraphQL server ready at: ${url}`);
