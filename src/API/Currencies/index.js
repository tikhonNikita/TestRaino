import APIRequest from '../configuration';
import { CURRENCIES_URL } from '../constants';

export default class CurrenciesAPI {
  async getCurrencies() {
    try {
      return APIRequest(CURRENCIES_URL);
    } catch (error) {
      console.warn(error);
    }
  }
}
