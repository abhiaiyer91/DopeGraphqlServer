import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import rootDefs from './typeDefinitions';
import countrySearchResolvers from '../resolvers/allCountries';

const logger = {
  log(e) {
    /* eslint-disable no-console */
    return console.log(e);
  }
};

const rootResolvers = {
  Query: {},
};

const resolvers = merge(rootResolvers, countrySearchResolvers);

const rootSchema = makeExecutableSchema({
  typeDefs: rootDefs,
  logger,
  resolvers,
});

export default rootSchema;
