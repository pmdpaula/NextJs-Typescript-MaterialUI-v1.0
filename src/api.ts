// import { QueryClient } from 'react-query';
// } from '@tanstack/react-query/build/types/packages/react-query/src';
import { GraphQLClient } from 'graphql-request';
import {
  QueryClient,
  // eslint-disable-next-line import/no-unresolved
} from 'react-query';

import { getSdk } from './generated/graphql';

const gqlClient = new GraphQLClient('http://localhost:3000/api/graphql');
export const { getMenuItems } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
