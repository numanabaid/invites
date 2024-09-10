import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (value) => {
    try {
        const storedData = await getData();
        const id = storedData.length ? storedData[storedData.length - 1].id : 1;
        storedData.push({
          id,
          ...value
        });
        const jsonValue = JSON.stringify(storedData)
        await AsyncStorage.setItem('invitesList', jsonValue)
    } catch(e) {}

};

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('invitesList');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {}
};

const clearData = async () => {
  try {
      await AsyncStorage.removeItem('invitesList')
  } catch(e) {}

};

export { setData, getData, clearData };
