import React from 'react';
import {
    StatusBar
} from 'react-native';

const AppBar = ({ barStyle, backgroundColor, hidden }) => {
    return(
        <StatusBar 
            hidden={hidden}
            barStyle={barStyle === 'light' ? 'light-content':'dark-content'}
            backgroundColor={backgroundColor}
        />
    );
}

export default AppBar;