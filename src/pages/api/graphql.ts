/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-micro';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import { ServerResponse } from 'http';
// eslint-disable-next-line import/no-unresolved
import { buildSchema } from 'type-graphql';

import { MenuItemsResolver } from '../../schema/menuItems.resolver';

// const schema = await buildSchema({
//   resolvers: [DogsResolver],
// });

const schema = await buildSchema({
  resolvers: [MenuItemsResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
