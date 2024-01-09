import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStorage = () => {
    const getItem = async (key) => {
        try {
            const password = await AsyncStorage.getItem(key);
            return JSON.parse(password) || [];
            return password;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const saveItem = async (key, item) => {
        try {
            let password = await getItem(key);
            password.push(item);
            await AsyncStorage.setItem(key, JSON.stringify(password));
        } catch (error) {
            console.log(error);
        }
    }

    const removeItem = async (key, item) => {
        try {
            let password = await getItem(key);
            let myPassword = password.filter((password) => {
                return (password !== item);
            });
            await AsyncStorage.setItem(key, JSON.stringify(myPassword));
            return myPassword;
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;