import APIRequest from '../configuration';
import { CONTRIES_URL } from '../constants';

export default class CountriesAPI {
  async getCountries() {
    try {
      return APIRequest(CONTRIES_URL);
    } catch (error) {
      console.warn(error);
    }
  }
}
