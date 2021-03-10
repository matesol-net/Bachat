/*
    File contains all function relates to React Native
    Linking Library
*/

import {
    Linking,
} from 'react-native';
import { PLATFORM } from '../config/config';

/**
 * Function that will open link
 * @param {*} link 
 */
export const _openLink = (link) => {
    Linking.openURL(link)
    .catch(()=>{
        alert('URL is invalid');
    });
}

/**
 * Function that will open dialer having number
 * @param {*} number 
 */
export const _dialNumber = (number) => {
    let phoneNumber = '';
    if (PLATFORM === 'android') {
        phoneNumber = 'tel:' + number;
    }
    else {
        phoneNumber = 'telprompt:' + number;
    }

    Linking.openURL(phoneNumber)
    .catch((err)=>{
        alert('Mobile Number is invalid or This functionality is not available on Simulator/Emulator');
    });
}

/**
 * Function that will open google maps
 * @param {*} mapUrl 
 */
export const _openMaps = (mapUrl) => {
    Linking.openURL(mapUrl)
    .catch((err)=>{
        alert("Map URL is invalid");
    });
}

/**
 * Function that will open default email application
 * @param {*} email 
 * @param {*} subject 
 * @param {*} body 
 */
export const _sendEmail = (email, subject, body) => {
    Linking.openURL('mailto:' + email + '?subject=' + subject + ' Us&body=' + body)
    .catch((err)=>{
        alert('Email is invalid or This functionality is not available on Simulator/Emulator');
    });
}
