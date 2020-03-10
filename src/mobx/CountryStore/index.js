import { action, computed, observable } from 'mobx';

import { CURRENCY_STORE, SELECTED_COUNTRY } from '../constants';
import { getItemFromAsyncStorage, setToAsyncStorage } from '../utils';

export default class CountryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable selectedCountry = {};
  @observable countries = [];
  @computed get dropdownFormattedCountries() {
    if (this.countries) {
      return this.countries.map(item => {
        return {
          name: item.translations.en,
          value: item._id,
          currency: item.preferredCurrency,
        };
      });
    }
  }

  @action.bound setSelectedCountry(country) {
    this.selectedCountry = country;
    setToAsyncStorage(SELECTED_COUNTRY, country);

    const currecyStore = this.rootStore[CURRENCY_STORE];
    currecyStore.updateAccordingCountry(country.currency.id);
  }

  @action async loadSelectedCounty() {
    const item = await getItemFromAsyncStorage(SELECTED_COUNTRY);
    if (item) {
      this.selectedCountry = item;
    }
  }

  @action.bound setCountries(countries) {
    this.countries = countries;
  }
}
