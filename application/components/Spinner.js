import React from 'react';
import {
    ActivityIndicator
} from 'react-native';

import { SPINNER_SIZE } from '../config/config';

const Spinner = ({color, style}) => {
    return(
        <ActivityIndicator 
            color={color}
            size={SPINNER_SIZE}
            style={style}
        />
    );
}

export default Spinner;