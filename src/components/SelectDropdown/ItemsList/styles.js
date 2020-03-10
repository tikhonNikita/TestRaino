import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  FlatList: {
    position: 'absolute',
    top: 0,
    left: 0,
    maxHeight: 140,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F1F4F8',
    borderRadius: 6,
    zIndex: 1,
    elevation: 1,
  },
  Item: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 5,
    minHeight: 40,
    minWidth: 140,
    fontSize: 16,
    fontFamily: 'inter-medium',
    color: '#505B76',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F4F8',
  },
  Text: {
    fontSize: 16,
    fontFamily: 'inter-medium',
    color: '#505B76',
  },
});

export default styles;
