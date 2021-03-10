import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../config/config';

const Input = ({placeholder, value, onChangeText, iconname, iconColor,  containerWidth, inputWidth, containerStyle, isPassword, isNumber}) => {
    return(
        <View style={[Styles._inputContainer, { width: containerWidth }, containerStyle ]}>
            <Icon 
                name={iconname}
                size={SCREEN_ICON_SIZE}
                color={iconColor}
            />
            <TextInput 
                selectionColor={COLORS.primaryColor}
                placeholderTextColor={COLORS.lightGrey}
                placeholder={placeholder}
                value={value}
                secureTextEntry={isPassword ? true:false}
                keyboardType={isNumber == null || isNumber == undefined || isNumber == false ? 'default':'number-pad'}
                onChangeText={onChangeText}
                style={[Styles._input, { width: inputWidth } ]}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _inputContainer:{
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING,
        borderBottomColor: COLORS.primaryColor,
        borderBottomWidth: 2,
    },
    _input:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        marginLeft: SPACING,
        color: COLORS.whiteColor
    },
});

export default Input;