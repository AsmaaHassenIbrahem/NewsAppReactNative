import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

function UseAsyncStorage(key, initialvalue) {

    const [storedValue, setStoredValue] = useState();
  
    async function getStoredItem(key, initialvalue) {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? json.parse(item) : initialvalue;
        setStoredValue(value);
      } catch (error) {
        console.log(error);
      }
    }
  
    useeffect(() => {
        getStoredItem(key, initialvalue);
    }, [key, initialvalue]);
  
    const setvalue = async (value) => {
      try {
          setStoredValue(value);
        await AsyncStorage.setItem(key, json.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };
  
    return [storedValue, setvalue];
  }

  export default UseAsyncStorage