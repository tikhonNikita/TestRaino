import React, { useEffect } from 'react';
import { TouchableOpacity, Text, Animated, Keyboard } from 'react-native';

import styles from './styles';

function Item({ item, onSelect }) {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} style={[styles.Item]}>
      <Text numberOfLines={5} ellipsizeMode={'tail'} style={styles.Text}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default function ItemsList({ onSelectItem, items, toggleDropdown }) {
  const keyboardDidShow = () => {
    toggleDropdown(false);
  };

  let anim = new Animated.Value(0.1);
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 0.9,
      duration: 100,
    }).start();
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const fadeOut = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 500,
    }).start();
  };

  const onSelect = item => {
    fadeOut();
    onSelectItem(item);
  };

  return (
    <Animated.FlatList
      style={{ ...styles.FlatList, opacity: anim }}
      data={items}
      renderItem={({ item }) => <Item item={item} onSelect={onSelect} />}
      keyExtractor={item => item.value}
      showsVerticalScrollIndicator={false}
    />
  );
}
