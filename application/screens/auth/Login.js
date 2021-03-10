import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { 
    _onLoginEmailChange, 
    _onLoginPasswordChange,
    _loggingIn
} from '../../redux/reducers/user/user_actions';

import { AppBar, Button, Input } from '../../components';
import { APPNAME, COLORS, FONT, FONT_SIZES, IMAGES, MESSAGES, MOBILE_HEIGHT, MOBILE_WIDTH, SPACING } from '../../config/config';
import { _gotoCustomer, _gotoForgetPassword, _gotoSignup } from '../../navigation/service';

const Login = ({navigation}) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const email = useSelector(state => state.user.loginEmail);
    const password = useSelector(state => state.user.loginPassword);
    const loading = useSelector(state => state.user.login_loading);

    //On Login Button Click
    const _onLoginButtonClick = () => {
        if(email.trim().length == 0)
            alert(MESSAGES.emptyEmail);
        else if(email.trim().includes("@") == false || email.trim().includes(".") == false)
            alert(MESSAGES.invalidEmail);
        else if(password.trim().length == 0)
            alert(MESSAGES.emptyPassword);
        else if(password.trim().length < 6)
            alert(MESSAGES.invalidPassword);
        else{
            let details = {
                email: email.trim().toLowerCase(),
                password: password.trim(),
            };
            dispatch(_loggingIn(details, navigation));
        }
    }

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.secondaryColor}
            />
            <Image source={IMAGES.splashBg} style={Styles._background} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <View style={Styles._logoView}>
                    <Image source={IMAGES.logo} style={Styles._logo} />
                    <Text style={Styles._appName}>{APPNAME}</Text>
                </View>
                <View style={Styles._inputContainer}>
                    <Input 
                        inputWidth='89%'
                        iconname='envelope'
                        iconColor={COLORS.primaryColor}
                        placeholder='Email'
                        value={email}
                        onChangeText={(text)=>{ dispatch(_onLoginEmailChange(text)) }}
                    />
                    <Input 
                        inputWidth='89%'
                        iconname='lock'
                        iconColor={COLORS.primaryColor}
                        placeholder='Password'
                        containerStyle={{ marginTop: SPACING }}
                        isPassword={true}
                        value={password}
                        onChangeText={(text)=>{ dispatch(_onLoginPasswordChange(text)) }}
                    />
                    <Text onPress={()=>{ _gotoForgetPassword(navigation) }} style={Styles._forgetPassword}>Forget Password?</Text>

                    <Button 
                        isLoading={loading}
                        //onPress={()=>{ _onLoginButtonClick() }}
                        onPress={()=>{ _gotoCustomer(navigation) }}
                        title='login'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                        style={{ marginTop: '10%' }}
                    />
                    <Text style={Styles._bottomText}>Don't have an account? <Text onPress={()=>{ _gotoSignup(navigation) }} style={Styles._bottomMainText}>Sign Up</Text></Text>

                </View>
        
            </ScrollView>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        padding: SPACING * 2,
    },
    _background:{
        position: 'absolute',
        width: MOBILE_WIDTH,
        height: MOBILE_HEIGHT,
        resizeMode: 'cover',
    },
    _scrollContainer:{
        paddingTop: '20%', 
        paddingBottom: MOBILE_HEIGHT / 2 
    },
    _logoView:{
        alignItems: 'center',
    },
    _logo:{
        width: MOBILE_WIDTH * 0.60,
        height: MOBILE_WIDTH * 0.60,
        resizeMode: 'contain'
    },
    _appName:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h1,
        color: COLORS.primaryColor,
        fontWeight: 'bold',
        marginTop: SPACING * 2,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    _inputContainer:{
        width: '100%',
        top: '10%',
    },
    _forgetPassword:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        textDecorationLine: 'underline',
        color: COLORS.primaryColor,
        alignSelf: 'flex-end',
        marginTop: SPACING,
    },
    _bottomText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.whiteColor,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: '20%'
    },
    _bottomMainText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.primaryColor,
    },
})

export default Login;