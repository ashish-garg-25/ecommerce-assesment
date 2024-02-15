import AsyncStorage from '@react-native-async-storage/async-storage';

class Preferences  {    
    static setItem = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log("setItem error == ",error)
        }
      };

      static getItem = async (key) => {
        try {
          let value = await AsyncStorage.getItem(key);
          return value != null ? value : '';
        } catch (error) {
            console.log("getItem error == ",error)
        }
      };

      static removeItem = async (key) => {
        try {
          await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("remove error == ",error)
        }
      };
}

export default Preferences;