import { GraphQLServer } from 'graphql-yoga';
import path from 'path';

// Resolvers
import resolvers from './graphql/resolvers';

export const server = new GraphQLServer({
  typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
  resolvers // <- Igual a [resolvers: resolvers]
});