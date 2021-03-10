/*
    File that contains all functions related to Share Library
*/

import Share from 'react-native-share';

/**
 * Function that will share application
 * @param {*} appInfo 
 */
export const _shareApplication = (appInfo) => {
    Share.open({
        title: 'Share to',
        message: appInfo.message,
        url: appInfo.url,
    })
    .then(()=>{
        console.log('opened');
    })
    .catch((err)=>{
        console.log("SHARE ERR: " + err);
    });
}