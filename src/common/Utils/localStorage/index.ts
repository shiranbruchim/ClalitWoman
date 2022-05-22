import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Remove an item from the local storage
 * @param key - The saved data key
 * @returns Promise<boolean | Error>
 */
const removeLocalData = async (key: string): Promise<boolean | Error> => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (ex) {
    return new Error(String(ex));
  }
};

/**
 * Set a key->value pair to the local storage
 * @param key string - the key to be saved
 * @param value any - the value to be saved
 * @returns Promise - set item promise
 */
const storeLocalData = async (
  key: string,
  value: unknown,
): Promise<void | Error> => {
  try {
    const savedValue = JSON.stringify(value);

    return AsyncStorage.setItem(key, savedValue);
  } catch (ex) {
    return new Error(String(ex));
  }
};

/**
 * Get a value by a saved local storage key
 * @param key string - the saved item key
 * @returns Promise<unknown | null> - the parsed value
 */
const getLocalData = async (key: string): Promise<unknown | null> => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  } catch (ex) {
    return new Error(String(ex));
  }
};

/**
 * Gets *all* keys known to your app; for all callers, libraries, etc.
 *
 * See https://react-native-async-storage.github.io/async-storage/docs/api#getallkeys
 */
const getLocalDataKeys = async (): Promise<readonly string[] | Error> => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    return keys;
  } catch (ex) {
    return new Error(String(ex));
  }
};

export {removeLocalData, storeLocalData, getLocalData, getLocalDataKeys};
