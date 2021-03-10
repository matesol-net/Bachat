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

const State = {
    login_loading: false,
    reset_loading: false,
    signup_loading: false,
    loginEmail: '',
    loginPassword: '',
    user: null,
    resetEmail: '',
    signupType: 'customer',
    signupName: '',
    signupMobile: '',
    signupEmail: '',
    signupPassword: '',
    signupPrivacy: false,
};

export default User_Reducer = (state=State,action) => {
    switch (action.type) {

        case LOGIN_LOADING:
            return {
                ...state,
                login_loading: true,
            }

        case RESET_LOADING:
            return {
                ...state,
                reset_loading: true,
            }

        case SIGNUP_LOADING:
            return {
                ...state,
                signup_loading: true,
            }
        
        case ON_LOGIN_EMAIL_CHANGE:
            return {
                ...state,
                loginEmail: action.text,
            }
        
        case ON_LOGIN_PASSWORD_CHANGE:
            return {
                ...state,
                loginPassword: action.text,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginEmail: '',
                loginPassword: '',
                login_loading: false,
                user: action.user,
            }

        case LOGIN_FAILED:
            return {
                ...state,
                login_loading: false,
            }

        case ON_SIGNUP_TYPE_CHANGE:
            return {
                ...state,
                signupType: action.userType,
            }

        case ON_SIGNUP_NAME_CHANGE:
            return {
                ...state,
                signupName: action.text,
            }

        case ON_SIGNUP_MOBILE_CHANGE:
            return {
                ...state,
                signupMobile: action.text,
            }

        case ON_SIGNUP_EMAIL_CHANGE:
            return {
                ...state,
                signupEmail: action.text,
            }

        case ON_SIGNUP_PASSWORD_CHANGE:
            return {
                ...state,
                signupPassword: action.text,
            }
        
        case ON_SIGNUP_PRIVACY_CHANGED:
            return {
                ...state,
                signupPrivacy: action.privacy,
            }
    
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupType: 'customer',
                signupName: '',
                signupMobile: '',
                signupEmail: '',
                signupPassword: '',
                signup_loading: false,
                signupPrivacy: false,
                user: action.user,
            }

        case SIGNUP_FAILED:
            return {
                ...state,
                signup_loading: false,
            }
        
        case ON_RESET_EMAIL_CHANGE:
            return {
                ...state,
                resetEmail: action.text,
            }

        case RESET_SUCCESS:
            return {
                ...state,
                reset_loading: false,
            }

        case RESET_FAILED:
            return{ 
                ...state,
                reset_loading: false,
            }

        default:
            return {
                ...state
            }
    }
};