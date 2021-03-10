import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
} from 'react-native'

import { COLORS, FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS, SPACING } from '../config/config';

const LabelInput = ({label, placeholder, value, onChangeText, containerWidth, inputWidth, isPassword, isNumber, editable}) => {
    return(
        <View style={{ width: containerWidth }}>
            <Text style={Styles._label}>{label}</Text>
            <TextInput 
                editable={editable}
                selectionColor={COLORS.secondaryColor}
                placeholderTextColor={COLORS.greyColor}
                placeholder={placeholder}
                value={value}
                secureTextEntry={isPassword ? true:false}
                keyboardType={isNumber == null || isNumber == undefined || isNumber == false ? 'default':'number-pad'}
                onChangeText={onChangeText}
                style={[Styles._input, { width: inputWidth, backgroundColor: editable == false ? COLORS.lightGrey : COLORS.whiteColor } ]}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _input:{
        height: INPUT_HEIGHT,
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.secondaryColor,
        borderRadius: RADIUS,
        paddingHorizontal: SPACING,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        marginTop: SPACING / 2,
        marginBottom: SPACING,
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    }
});

export default LabelInput;