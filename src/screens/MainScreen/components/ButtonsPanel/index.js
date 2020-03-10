import React from 'react';
import { View } from 'react-native';

import ButtonWithIcon from '../ButtonWithIcon';

import styles from './styles';

import buttonIcons from '../../assets/images/buttonIcons';

export default function ButtonsPanel() {
  return (
    <View style={styles.ButtonsPanel}>
      <ButtonWithIcon
        icon={buttonIcons.cross}
        onPress={() => console.log('cross')}
      />
      <ButtonWithIcon
        icon={buttonIcons.man}
        onPress={() => console.log('man')}
      />
      <ButtonWithIcon
        icon={buttonIcons.pin}
        onPress={() => console.log('pin')}
      />
      <ButtonWithIcon
        icon={buttonIcons.timer}
        onPress={() => console.log('timer')}
      />
      <ButtonWithIcon
        icon={buttonIcons.micro}
        onPress={() => console.log('micro')}
      />
      <ButtonWithIcon
        last
        icon={buttonIcons.raino}
        onPress={() => console.log('raino')}
      />
    </View>
  );
}
