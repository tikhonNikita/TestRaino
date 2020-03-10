import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const selectStyle = last => (last ? styles.Last : null);

export default function ButtonWithIcon({ icon, onPress, last }) {
  return (
    <TouchableOpacity onPress={onPress} style={selectStyle(last)}>
      <Image source={icon} />
    </TouchableOpacity>
  );
}
