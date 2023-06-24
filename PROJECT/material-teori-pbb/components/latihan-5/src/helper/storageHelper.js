import AsyncStorage from '@react-native-async-storage/async-storage';

const storedData = async (key, value)=>{
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error storing data", error);
    }
}

const getStorageData = async (key) =>{
    try {
        const value = await AsyncStorage.getItem(key);
        if(value !== null){
            return value;
        }
    } catch (error) {
        console.log("Error get storing data", error);
    }
}

const removeAllData = async ()=>{
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log("Error storing data", error);
    }
}


export {storedData, getStorageData, removeAllData};