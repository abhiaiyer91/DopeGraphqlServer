import countrySchema from './countrySchema';

const typeDefs = [`
  schema {
    query: Query
  }
  type Query {
    allCountries: [Country]
    singleCountry(searchTerm: String): Country
  }
`];

const rootDefinition = [...typeDefs, ...countrySchema];

export default rootDefinition;
