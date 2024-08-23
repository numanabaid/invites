import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (value) => {
    try {
        const storedData = await getData();
        storedData.push(value);
        const jsonValue = JSON.stringify(storedData)
        await AsyncStorage.setItem('invitesList', jsonValue)
    } catch(e) {
      // save error
    }

};

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('invitesList');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
    }
};

export { setData, getData };
