import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Modal from 'react-native-modal';
import { Button } from '.';
import { COLORS, FONT, FONT_SIZES, RADIUS, SPACING } from '../config/config';

const AuthModal = ({closeButton, isVisible, onLoginSignupClick}) => {
    return(
        <Modal
            onBackButtonPress={closeButton}
            onBackdropPress={closeButton}
            isVisible={isVisible}
        >
            <View style={Styles._mainContainer}>
                <View style={Styles._modalHeaderView}>
                    <Text style={Styles._modalHeading}>Login/Signup Required</Text>
                </View>
                <Text style={Styles._info}>To perform this action you have to be a registered user. Then do login/signup to perform this action</Text>
                <Button 
                    onPress={onLoginSignupClick}
                    title='Login/Signup'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                />
                <Button 
                    onPress={closeButton}
                    title='Close'
                    titleColor={COLORS.greyColor}
                />
            </View>
        </Modal>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        padding: SPACING,
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
    },
    _modalHeaderView:{
        paddingBottom: SPACING,
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        marginBottom: SPACING,
        alignItems: 'center',
    },
    _info:{
        fontFamily:FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor,
        marginBottom: SPACING,
    },
    _modalHeading:{
        fontFamily:FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    }
});

export default AuthModal;