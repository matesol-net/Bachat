/*
    File contains all functions related to async storage
*/

import AsyncStorage from '@react-native-community/async-storage';

/**
 * Function that will set value in async storage
 * @param {*} key 
 * @param {*} value 
 */
export const _setItem = (key, value) => {
    return new Promise(async(res, rej)=>{
        await AsyncStorage.setItem(key, value)
        .then(()=>{
            res(true);
        })
        .catch((err)=>{
            rej(err);
        })
    })
}

/**
 * Function that will get value from async storage
 * @param {*} key 
 */
export const _getItem = (key) => {
    return new Promise(async(res, rej)=>{
        await AsyncStorage.getItem(key)
        .then((data)=>{
            res(data);
        })
        .catch((err)=>{
            rej(err);
        })
    })
}