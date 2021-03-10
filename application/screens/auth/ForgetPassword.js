import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { _onResetEmailChange, _resettingPassword } from '../../redux/reducers/user/user_actions';

import { AppBar, Button, Input } from '../../components';
import { COLORS, FONT, FONT_SIZES, IMAGES, MESSAGES, MOBILE_HEIGHT, MOBILE_WIDTH, PLATFORM, SPACING } from '../../config/config';

const ForgetPassword = ({navigation}) => {

    const dispatch = useDispatch();
    const email = useSelector(state => state.user.resetEmail);
    const loading = useSelector(state => state.user.reset_loading);

    //On send Button Click
    const _onSendBtnClick = () => {
        if(email.trim().length == 0)
            alert(MESSAGES.emptyEmail);
        else if(email.trim().includes("@") == false || email.trim().includes(".") == false)
            alert(MESSAGES.invalidEmail);
        else{
            dispatch(_resettingPassword(email.trim().toLowerCase(),navigation));
        }
    }

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.secondaryColor}
            />
            <Image source={IMAGES.splashBg} style={Styles._background} />
            <Text style={Styles._heading}>Reset your password</Text>
            <Text style={Styles._info}>Please enter your registered Email address. A password reset link will be sent to you</Text>
            <Input 
                inputWidth='89%'
                iconname='envelope'
                iconColor={COLORS.primaryColor}
                placeholder='Registered Email'
                value={email}
                onChangeText={(text)=>{ dispatch(_onResetEmailChange(text)) }}
                containerStyle={{ marginTop: SPACING * 2 }}
            />
            <Button 
                isLoading={loading}
                onPress={()=>{ _onSendBtnClick() }}
                title='send link'
                titleColor={COLORS.whiteColor}
                backgroundColor={COLORS.primaryColor}
                style={{ marginTop: SPACING }}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        padding: SPACING * 2,
    },
    _background:{
        position: 'absolute',
        width: MOBILE_WIDTH,
        height: MOBILE_HEIGHT,
        resizeMode: 'cover',
    },
    _heading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.whiteColor,
        marginTop: PLATFORM === 'ios' ? SPACING * 8:SPACING * 4,
    },
    _info:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.lightGrey,
        marginTop: SPACING/2,
    },
})

export default ForgetPassword;