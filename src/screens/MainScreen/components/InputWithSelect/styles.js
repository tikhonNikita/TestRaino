import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  TextInputStyleClass: {
    marginTop: 55,
    textAlign: 'center',
    height: 100,
    width: 343,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'transparent',
    backgroundColor: '#FFFFFF',
  },
  Image: {
    height: 217,
    width: 343,
  },
  ItemsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SelectsLine: {
    position: 'absolute',
    top: 70,
    paddingHorizontal: 15,
    zIndex: 1,
    width: 343,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  CloseButton: {
    marginLeft: 150,
    marginTop: 10,
  },
});

export default styles;
