import React from 'react';
import { SafeAreaView } from 'react-native';

import InputWithSelect from './components/InputWithSelect';

import styles from './styles';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <InputWithSelect />
    </SafeAreaView>
  );
}
