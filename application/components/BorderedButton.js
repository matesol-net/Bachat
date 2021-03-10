import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import { FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS } from '../config/config';

const BorderedButton = ({title, titleColor, borderColor, width, style, onPress}) => {
    return(
        <TouchableOpacity
            onPress={onPress}
            style={[Styles._btnContainer,{
                borderColor,
                width,
            },style]}
        >
            <Text style={[Styles._title, { color: titleColor } ]}>{title}</Text>
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    _btnContainer:{
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RADIUS,
        backgroundColor: 'transparent',
        borderWidth: 1,
    },
    _title:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});

export default BorderedButton;