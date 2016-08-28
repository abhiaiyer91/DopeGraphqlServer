import getCountries, { singleCountry } from '../connectors/geoConnector';

export default {
  Query: {
    async allCountries() {
      const countries = await getCountries();
      return countries;
    },
    async singleCountry(root, { searchTerm }) {
      const country = await singleCountry(searchTerm);
      return country;
    }
  }
};
