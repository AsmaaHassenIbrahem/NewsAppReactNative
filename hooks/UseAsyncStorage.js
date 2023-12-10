import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';

const UseAsyncStorage = (key, initialvalue) => {

  const [storedValue, setStoredValue] = useState();

    const getStoredItem = async (key, initialvalue) => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? json.parse(item) : initialvalue;
        setStoredValue(value);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
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
  };

  export default UseAsyncStorage