import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Modal from 'react-native-modal';
import { Button, LabelInput } from '.';
import { COLORS, FONT, FONT_SIZES, RADIUS, SPACING } from '../config/config';

const UpdatePasswordModal = ({isVisible, currentPassword, newPassowrd, onCurrentPassChange, onNewPassChange, onSubmitClick, onCloseClick}) => {
    return(
        <Modal
            onBackButtonPress={onCloseClick}
            onBackdropPress={onCloseClick}
            isVisible={isVisible}
        >
            <View style={Styles._mainContainer}>
                <LabelInput 
                    label='Current Password'
                    placeholder='Current Password'
                    isPassword={true}
                    value={currentPassword}
                    onChangeText={onCurrentPassChange}
                />
                <LabelInput 
                    label='New Password'
                    placeholder='New Password'
                    isPassword={true}
                    value={newPassowrd}
                    onChangeText={onNewPassChange}
                />
                <Button 
                    onPress={onSubmitClick}
                    title='Submit'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                    style={{ marginTop: SPACING }}
                />
                <Button 
                    onPress={onCloseClick}
                    title='Close'
                    titleColor={COLORS.greyColor}
                    style={{ marginTop: SPACING }}
                />
            </View>
        </Modal>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        padding: SPACING,
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS
    },
    _headingView:{
        paddingBottom: SPACING,
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
        marginBottom: SPACING
    },
    _heading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
});

export default UpdatePasswordModal;