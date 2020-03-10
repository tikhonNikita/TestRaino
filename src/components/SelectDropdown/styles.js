import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: isOpen => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: isOpen ? 150 : 20,
      minWidth: 140,
      elevation: 1,
    };
  },
  DropdownContainer: {
    minWidth: 140,
    height: 25,
    backgroundColor: '#FFFFFF',
  },
  TextStyle: {
    fontFamily: 'inter-medium',
    color: '#505B76',
    width: 120,
  },
  LabelContainer: {
    flex: 1,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F4F8',
  },
  Vector: {
    marginTop: 4,
    marginLeft: 15,
  },
});

export default styles;
