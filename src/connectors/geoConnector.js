//@flow

import rp from 'request-promise';
import { get, chain } from 'lodash';

const username = 'abhiaiyer';

/**
 * Search the geonames api by Country Code e.g. (AS, AD etc)
 * @param searchTerm
 * @returns {Promise.<T>|IPromise<U>}
 */
export function singleCountry(searchTerm: string): Promise<Object> {
  const url = `http://api.geonames.org/countryInfoJSON?country=${searchTerm}&username=${username}&style=full`;
  const options = {
    uri: url,
    json: true // Automatically parses the JSON string in the response
  };
  return rp(options).then((data: Object): Object => {
    const geoNames = get(data, 'geonames');
    return chain(geoNames).map(({ capital, continent, population, continentName, countryName, currencyCode, countryCode }: Object): Object => {
      return {
        continentName,
        name: countryName,
        currencyCode,
        countryCode,
        population,
        continentCode: continent,
        capital,
      };
    }).first().value();
  }).catch((error: Object): Error => {
    throw new Error(error.reason);
  });
}

/**
 * get all country data from geonames
 * @returns {Promise.<T>|IPromise<U>}
 */
export default function getCountries(): Promise<Object> {
  const url = `http://api.geonames.org/countryInfoJSON?username=${username}&style=full`;
  var options = {
    uri: url,
    json: true // Automatically parses the JSON string in the response
  };
  return rp(options).then((data: Object): Array<Object> => {
    const geoNames = get(data, 'geonames');
    return geoNames.map(({ capital, continent, population, continentName, countryName, currencyCode, countryCode }: Object): Object => {
      return {
        continentName,
        name: countryName,
        currencyCode,
        countryCode,
        population,
        continentCode: continent,
        capital,
      };
    });
  }).catch((error: Object): Error => {
    throw new Error(error.reason);
  });
}
