import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import MainScreen from './src/screens/MainScreen/index.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

function fetchFonts() {
  return Font.loadAsync({
    'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  } else {
    return <MainScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
