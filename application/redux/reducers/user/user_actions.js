import {
    LOGIN_LOADING,
    RESET_LOADING,
    SIGNUP_LOADING,
    ON_LOGIN_EMAIL_CHANGE,
    ON_LOGIN_PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    ON_SIGNUP_TYPE_CHANGE,
    ON_SIGNUP_NAME_CHANGE,
    ON_SIGNUP_MOBILE_CHANGE,
    ON_SIGNUP_EMAIL_CHANGE,
    ON_SIGNUP_PASSWORD_CHANGE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    ON_SIGNUP_PRIVACY_CHANGED,
    ON_RESET_EMAIL_CHANGE,
    RESET_SUCCESS,
    RESET_FAILED,
} from './user_types';

import {
    MESSAGES
} from '../../../config/config';

import {
    AUTH,
    USER_REF
} from '../../../firebase/refs';
import { _gotoCustomer, _gotoRestaurant } from '../../../navigation/service';

/**
 * Action for login email input handler
 * @param {*} email 
 */
export const _onLoginEmailChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_LOGIN_EMAIL_CHANGE,
            text: text
        });
    })
}

/**
 * Action for login password input handler
 * @param {*} password 
 */
export const _onLoginPasswordChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_LOGIN_PASSWORD_CHANGE,
            text: text
        });
    })
}

/**
 * Action for doing login
 * @param {*} password 
 */
export const _loggingIn = (details, navigation) => {
    return(async(dispatch)=>{

        dispatch({
            type: LOGIN_LOADING
        });

        await AUTH.signInWithEmailAndPassword(details.email, details.password)
        .then(async()=>{

            //Checking is user Email verified or not
            if(AUTH.currentUser.emailVerified){
                
                //Getting User Detials from database
                const ref = USER_REF.child(AUTH.currentUser.uid);
                await ref.once('value',(snapshot)=>{
                    if(snapshot){
                        let user = snapshot.val();

                        //Login Successful
                        dispatch({
                            type: LOGIN_SUCCESS,
                            user: user,
                        });

                        //Navigating to respective Stack
                        if(user.type == 'customer')
                            _gotoCustomer(navigation);
                        else
                            _gotoRestaurant(navigation);
                    }
                    else{
                        dispatch({
                            type: LOGIN_FAILED,
                        });
                        setTimeout(() => {
                            alert("Oops! Your account is not present in the database. Please contact support");
                        }, 100);
                    }
                })
            }
            else{
                dispatch({
                    type: LOGIN_FAILED,
                });
                setTimeout(() => {
                    alert("Oops! You didn't verify your Email yet. Kindly, verify your Email and try again. Thank you");
                }, 100);
            }
        })
        .catch((err)=>{
            dispatch({
                type: LOGIN_FAILED,
            });

            setTimeout(() => {
                var errorCode = err.code;
                if (errorCode === 'auth/invalid-email') {
                    alert(MESSAGES.invalidEmail);
                } 
                else if (errorCode === 'auth/user-disabled') {
                    alert('Sorry! Your account is disabled. Please contact support for further assistance. Thank You');
                }
                else if (errorCode === 'auth/user-not-found') {
                    alert(MESSAGES.userNotFound);
                } 
                else if (errorCode === 'auth/wrong-password') {
                    alert('Password is incorrect. Please check your Password again');
                } 
                else {
                    alert(MESSAGES.somethingError);
                }
            }, 100);
        })
    })
}

/**
 * Action for reset input handler
 * @param {*} text 
 */
export const _onResetEmailChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_RESET_EMAIL_CHANGE,
            text: text,
        })
    })
}

/**
 * Action for sending reset password link to email
 * @param {*} email 
 * @param {*} navigation 
 */
export const _resettingPassword = (email, navigation) => {
    return(async(dispatch)=>{

        dispatch({
            type: RESET_LOADING,
        })

        await AUTH.sendPasswordResetEmail(email)
        .then(()=>{
            dispatch({
                type: RESET_SUCCESS,
            });
            _gotoLogin(navigation);
            setTimeout(() => {
                alert("A password reset email has been sent to you. Please check your inbox and follow given instructions. Thank you");
            }, 100);
        })
        .catch((err)=>{
            dispatch({
                type: RESET_FAILED,
            });
            setTimeout(() => {
                var errorCode = err.code;
                if (errorCode === 'auth/invalid-email') {
                    alert(MESSAGES.invalidEmail);
                } 
                else if (errorCode === 'auth/user-not-found') {
                    alert(MESSAGES.userNotFound);
                }
                else{
                    alert(MESSAGES.somethingError);
                }
            }, 100);
        })
    });
}

/**
 * Action for type change handler
 * @param {*} type 
 */
export const _onSignupTypeChange = (userType) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_TYPE_CHANGE,
            userType: userType,
        })
    });
}

/**
 * Action for Name input handler
 * @param {*} text 
 */
export const _onSignupNameChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_NAME_CHANGE,
            text: text,
        })
    });
}

/**
 * Action for Mobile input handler
 * @param {*} text 
 */
export const _onSignupMobileChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_MOBILE_CHANGE,
            text: text,
        })
    });
}

/**
 * Action for Email input handler
 * @param {*} text 
 */
export const _onSignupEmailChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_EMAIL_CHANGE,
            text: text,
        })
    });
}

/**
 * Action for Password input handler
 * @param {*} text 
 */
export const _onSignupPasswordChange = (text) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_PASSWORD_CHANGE,
            text: text,
        })
    });
}

/**
 * Action for Privacy state change
 * @param {*} text 
 */
export const _onSignupPrivacyTick = (privacy) => {
    return((dispatch)=>{
        dispatch({
            type: ON_SIGNUP_PRIVACY_CHANGED,
            privacy: privacy,
        })
    });
}