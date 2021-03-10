/* 
    This file contains all the functions related to the 
    redirection between the screens of the application
*/

import { _setItem } from '../utils/async';

/**
  * Function that will redirect user to welcome screen
  * @param {*} navigation 
*/
export const _gotoWelcome = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'welcome' }]
    });
};

/**
 * Function that will redirect user to login screen
 * @param {*} navigation 
 */
export const _gotoLogin = (navigation) => {
    navigation.navigate('login');
}

/**
 * Function that will redirect user to signup screen
 * @param {*} navigation 
 */
export const _gotoSignup = (navigation) => {
    navigation.navigate('signup');
}

/**
 * Function that will redirect user to Forget password screen
 * @param {*} navigation 
 */
export const _gotoForgetPassword = (navigation) => {
    navigation.navigate('forgetpassword');
}

/**
 * Function that will redirect user to Customer side
 * @param {*} navigation 
 */
export const _gotoCustomer = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'customer' }]
    })
}

/**
 * Function that will redirect user to Restaurant side
 * @param {*} navigation 
 */
export const _gotoRestaurant = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'restaurant' }]
    })
}

/**
 * Function that will take user to post details
 * @param {*} navigation 
 */
export const _gotoDetails = (navigation, item) => {
    navigation.navigate('details',({
        item: item
    }));
}

/**
 * Function that will redirect user to book screen
 * @param {*} navigation 
 */
export const _gotoBookScreen = (navigation) => {
    navigation.navigate('book');
}

/**
 * Function that will redirect user to confirmation screen
 * and reset the navigator
 * @param {*} navigation 
 */
export const _gotoConfirmation = (navigation, order) => {
    navigation.reset({
        index: 0,
        routes: [{ name:'confirmation', params:({ order: order }) }]
    });
}

/**
 * Function that will take customer to order details
 * @param {*} navigation 
 * @param {*} order 
 * @param {*} screen 
 */
export const _gotoCustOrdersDetails = (navigation, order, screen ) => {
    navigation.navigate('custOrderDetails',({
        order: order,
        screen: screen
    }));
}

/**
 * Function that will take restaurant to order details
 * @param {*} navigation 
 * @param {*} order 
 * @param {*} screen 
 */
export const _gotoRestOrdersDetails = (navigation, order, screen ) => {
    navigation.navigate('restorderdetails',({
        order: order,
        screen: screen
    }));
}

/**
 * Function that will take customer to restaurant details
 * @param {*} navigation 
 * @param {*} restaurant 
 */
export const _gotoRestDetails = (navigation, restaurant) => {
    navigation.navigate('restDetails',({
        restaurant: restaurant
    }));
}

/**
 * Function that will take user to splash and reset navigator
 * @param {*} navigation 
 */
export const _gotoSplash = (navigation) => {
    _setItem('user','')
    .then(()=>{
        navigation.reset({
            index: 0,
            routes: [{ name:'splash' }]
        });
    })
    .catch((err)=>{
        alert(err);
    })
}

/**
 * Function that will take restaurant to edit item
 * @param {*} navigation 
 * @param {*} item 
 */
export const _gotoEditItem = (navigation, item) => {
    navigation.navigate('edititem',({
        item: item
    }));
}

/**
 * Function that will take user to add branch
 * @param {*} navigation 
 * @param {*} item 
 */
export const _gotoAddBranch = (navigation) => {
    navigation.navigate('addbranch');
}

/**
 * Function that will take user to guest and reset the navigator
 * @param {*} navigation 
 */
export const _gotoGuest = (navigation) => {
    _setItem('user', 'guest')
    .then(()=>{
        navigation.reset({
            index: 0,
            routes: [{ name:'guest' }]
        });
    })
    .catch((err)=>{
        alert(err);
    })
}

