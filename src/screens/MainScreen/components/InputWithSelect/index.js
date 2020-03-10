import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonsPanel from '../ButtonsPanel/index';
import SelectDropdown from '../../../../components/SelectDropdown/index';

import rootStore from '../../../../mobx/rootStore';
import { COUNTRY_STORE, CURRENCY_STORE } from '../../../../mobx/constants';

import icons from '../../assets/images/buttonIcons.js';

import styles from './styles';

const unionImage = require('../../assets/images/Union.png');

export default observer(function InputWithSelect() {
  const [isLoading, setLoading] = useState(true);
  const {
    [COUNTRY_STORE]: countryStore,
    [CURRENCY_STORE]: currencyStore,
  } = useContext(rootStore);

  useEffect(() => {
    async function setUpStores() {
      setLoading(true);
      await countryStore.rootStore.setStores();
      setLoading(false);
    }
    setUpStores();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <KeyboardAvoidingView
          style={styles.ItemsContainer}
          behavior="padding"
          enabled
          keyboardVerticalOffset={90}>
          <ImageBackground source={unionImage} style={styles.Image}>
            <TouchableOpacity style={styles.CloseButton}>
              <Image source={icons.close} />
            </TouchableOpacity>
            <View style={styles.SelectsLine}>
              <SelectDropdown
                items={toJS(countryStore.dropdownFormattedCountries)}
                selectedItem={countryStore.selectedCountry}
                onSelect={countryStore.setSelectedCountry}
              />
              <SelectDropdown
                items={toJS(currencyStore.dropdownFormattedCurrencies)}
                selectedItem={currencyStore.selectedCurrency}
                onSelect={currencyStore.setSelectedCurrency}
              />
            </View>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.TextInputStyleClass}
            />
          </ImageBackground>
          <ButtonsPanel />
        </KeyboardAvoidingView>
      )}
    </>
  );
});
