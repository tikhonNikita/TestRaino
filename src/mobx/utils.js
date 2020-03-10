import { AsyncStorage } from 'react-native';

export async function setToAsyncStorage(key, item) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(error);
  }
}

export async function getItemFromAsyncStorage(key) {
  try {
    const rawItem = await AsyncStorage.getItem(key);
    return JSON.parse(rawItem);
  } catch (error) {
    console.error(error);
  }
}
