import express from 'express';
import { apolloExpress, graphiqlExpress } from 'apollo-server';
import rootSchema from './schema/rootSchema';

const bodyParser = require('body-parser');

const GRAPHQL_PORT = 8000;

const app = express();

app.use('/graphql', bodyParser.json(), apolloExpress({
  schema: rootSchema,
}));

if (process.env.NODE_ENV === 'development') {
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    context: {},
  }));
}

app.listen(GRAPHQL_PORT, () => {
  /* eslint-disable no-console */
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
  );
});
