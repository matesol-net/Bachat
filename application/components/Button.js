import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native';
import { FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS, SCREEN_ICON_SIZE } from '../config/config';

const Button = ({title, titleColor, backgroundColor, width, style, onPress, isLoading}) => {
    return(
        <TouchableOpacity
            disabled={isLoading}
            onPress={onPress}
            style={[
                Styles._btnContainer,{
                    backgroundColor,
                    width,
                },
                style
            ]}
        >
            {
                isLoading ? (
                    <ActivityIndicator 
                        color={titleColor}
                        size={SCREEN_ICON_SIZE}
                    />
                ):(
                    <Text style={[Styles._title, { color: titleColor } ]}>{title}</Text>
                )
            }
        </TouchableOpacity>
    );
}

const Styles = StyleSheet.create({
    _btnContainer:{
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RADIUS,
    },
    _title:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});

export default Button;