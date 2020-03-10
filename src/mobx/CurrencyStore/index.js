import { action, computed, observable } from 'mobx';

import { getItemFromAsyncStorage, setToAsyncStorage } from '../utils';
import { SELECTED_CURRENCY } from '../constants';

export default class CurrencyStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable selectedCurrency = {};
  @observable currencies = [];
  @observable currencySelectedManually = false;
  @computed get dropdownFormattedCurrencies() {
    if (this.currencies) {
      return this.currencies.map(item => {
        return {
          name: item.translations.en,
          value: item._id,
        };
      });
    }
  }

  @action.bound setSelectedCurrency(currency) {
    this.selectedCurrency = currency;
    this.currencySelectedManually = true;
    setToAsyncStorage(SELECTED_CURRENCY, currency);
  }

  @action async loadSelectedCurrency() {
    const item = await getItemFromAsyncStorage(SELECTED_CURRENCY);
    if (item) {
      this.selectedCurrency = item;
    }
  }

  @action.bound setCurrencies(currencies) {
    this.currencies = currencies;
  }

  @action.bound updateAccordingCountry(currencyId) {
    console.log(this.currencies[0]);
    if (this.currencySelectedManually) {
      return;
    }
    const currency = this.currencies.find(item => item._id === currencyId);
    if (currency) {
      this.selectedCurrency = {
        name: currency.translations.en,
        value: currency._id,
      };

      setToAsyncStorage(SELECTED_CURRENCY, currency);
    }
  }
}
