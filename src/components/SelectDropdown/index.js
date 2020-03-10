import React, { useState } from 'react';
import { Image, Keyboard, Text, TouchableOpacity, View } from 'react-native';

import ItemsList from './ItemsList';

import styles from './styles';

const vector = require('../../assets/Vector.png');

export default function SelectDropdown({ items, onSelect, selectedItem }) {
  const [isSelectOpen, toggleSelect] = useState(false);

  const onSelectItem = item => {
    toggleSelect(!isSelectOpen);
    onSelect(item);
  };

  const onLabelPress = () => {
    Keyboard.dismiss();
    toggleSelect(!isSelectOpen);
  };

  return (
    <View style={styles.MainContainer(isSelectOpen)}>
      {isSelectOpen ? (
        <ItemsList
          onSelectItem={onSelectItem}
          items={items}
          toggleDropdown={toggleSelect}
        />
      ) : (
        <TouchableOpacity
          onPress={() => onLabelPress()}
          style={styles.DropdownContainer}>
          <View style={styles.LabelContainer}>
            <Text
              adjustsFontSizeToFit
              minimumFontScale={0.5}
              style={styles.TextStyle}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {selectedItem.name || 'Nothing selected'}
            </Text>
            <Image source={vector} style={styles.Vector} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
