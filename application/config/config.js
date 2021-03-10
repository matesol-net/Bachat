import {
    Platform,
    Dimensions,
} from 'react-native';

export const APPNAME = 'Bachat';
export const PLATFORM = Platform.OS;
export const MOBILE_WIDTH = Dimensions.get('window').width;
export const MOBILE_HEIGHT = Dimensions.get('window').height;
export const SPACING = 10;
export const RADIUS = 10;
export const SPINNER_SIZE = 24;
export const INPUT_HEIGHT =  45;
export const SCREEN_ICON_SIZE = 24;
export const HEADER_ICON_SIZE = 24;
export const FONT = 'Ubuntu-Regular';
export const FONT_SIZES = {
    h1: 36,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 18,
    info1: 16,
    info2: 14
};

//Payment options
export const PAYMENT_OPTIONS = [
    {
        label: 'Cash on Delivery'
    },
    {
        label: 'Credit Card'
    },
    {
        label: 'Debit Card'
    },
];

//Zoom Animation
export const ZOOM_ANIMATION = {
    0:{
        opacity: 0,
        scale: 0,
    },
    1: {
        opacity: 1,
        scale: 1,
    }
};

//Application colors
export const COLORS = {
    primaryColor: '#ffb300',
    secondaryColor: '#2e2e2e',
    borderColor: '#e7e7e7',
    greyColor: 'grey',
    lightGrey: '#e7e7e7',
    whiteColor: '#fff',
    blackColor: '#000',
    redColor: '#d62828',
    greenColor: 'green',
    starColor: '#FD7F23',
};

//Application Images
export const IMAGES = {
    logo: require('../assets/images/logo.png'),
    splashBg: require('../assets/images/bgSplash.png'),
    loginBg: require('../assets/images/login_bg.png'),
    header: require('../assets/images/staticHeader.png'),
    confirmation: require('../assets/images/confirmation.png'),
    cameraIcon: require('../assets/images/camera.png'),
    galleryIcon: require('../assets/images/gallery.png'),
};

export const CUISINES_TYPES = [
    {
        value: 'Cuisine 1',
    },
    {
        value: 'Cuisine 2',
    },
    {
        value: 'Cuisine 3',
    },
    {
        value: 'Cuisine 4',
    },
    {
        value: 'Cuisine 5',
    },
    {
        value: 'Cuisine 6',
    },
];

export const BRANCHES = [
    {
        value: 'Branch 1',
    },
    {
        value: 'Branch 2',
    },
    {
        value: 'Branch 3',
    },
    {
        value: 'Branch 4',
    },
    {
        value: 'Branch 5',
    },
    {
        value: 'Branch 6',
    },
]

export const CUISINES = [
    {
        key: '1',
        name: 'Cuisine 1',
    },
    {
        key: '2',
        name: 'Cuisine 2',
    },
    {
        key: '3',
        name: 'Cuisine 3',
    },
    {
        key: '4',
        name: 'Cuisine 4',
    },
    {
        key: '6',
        name: 'Cuisine 5',
    },
    {
        key: '6',
        name: 'Cuisine 6',
    },
]

export const DUMMY = [
    {
        key: '0'
    },
    {
        key: '1'
    },
    {
        key: '2'
    },
    {
        key: '3'
    },
    {
        key: '4'
    },
];


//Common messages for the application
export const MESSAGES = {
    emptyEmail: "Email is requried",
    invalidEmail: "Email is not a valid one. Please enter a valid email. e.g. abc@abc.abc",
    emptyPassword: "Password is required",
    invalidPassword: "Password should contain at least 6 characters",
    userNotFound: "There is no user exist corresponding to this Email. Please check your Email again",
    somethingError: "Something is going wrong while Loggin in. Please try again after sometime",
}