import { createContext } from 'react';

import CurrencyStore from './CurrencyStore/index';
import CountryStore from './CountryStore/index';
import CountriesAPI from '../API/Countries/index';
import CurrenciesAPI from '../API/Currencies/index';

import { COUNTRY_STORE, CURRENCY_STORE } from './constants';

export class RootStore {
  constructor() {
    this[CURRENCY_STORE] = new CurrencyStore(this);
    this[COUNTRY_STORE] = new CountryStore(this);
  }

  async setStores() {
    const countriesAPI = new CountriesAPI();
    const currenciesAPI = new CurrenciesAPI();
    const countryStore = this[COUNTRY_STORE];
    const currencyStore = this[CURRENCY_STORE];

    const [countries, currencies] = await Promise.all([
      countriesAPI.getCountries(),
      currenciesAPI.getCurrencies(),
    ]);

    const filteredCountries = countries.items.sort((a, b) => {
      return a.translations.en > b.translations.en ? 1 : -1;
    });

    const filteredCurrencies = currencies.items.sort((a, b) => {
      return a.translations.en > b.translations.en ? 1 : -1;
    });

    countryStore.setCountries(filteredCountries);
    currencyStore.setCurrencies(filteredCurrencies);
    await countryStore.loadSelectedCounty();
    await currencyStore.loadSelectedCurrency();
  }
}

const stores = new RootStore();

const rootStore = createContext(stores);

export default rootStore;
