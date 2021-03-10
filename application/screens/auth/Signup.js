import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import {
    _onSignupTypeChange,
    _onSignupNameChange,
    _onSignupMobileChange,
    _onSignupEmailChange,
    _onSignupPasswordChange,
    _onSignupPrivacyTick
} from '../../redux/reducers/user/user_actions';

import CheckBox from '@react-native-community/checkbox';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppBar, Button, Input } from '../../components';
import { APPNAME, COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_HEIGHT, MOBILE_WIDTH, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { _gotoForgetPassword, _gotoLogin, _gotoRestaurant, _gotoSignup } from '../../navigation/service';
import { _openLink } from '../../utils/linking';
import { PrivateValueStore } from '@react-navigation/native';

const Signup = ({navigation}) => {

    const dispatch = useDispatch();
    const sta = useSelector(state => state);
    const type = useSelector(state => state.user.signupType);
    const name = useSelector(state => state.user.signupName);
    const mobile = useSelector(state => state.user.signupMobile);
    const email = useSelector(state => state.user.signupEmail);
    const loading = useSelector(state => state.user.signup_loading);
    const password = useSelector(state => state.user.signupPassword);
    const privacy = useSelector(state => state.user.signupPrivacy);

    //On User Type Change
    const _toggleUserType = () => {
        if(type === 'customer')
            dispatch(_onSignupTypeChange('restaurant'));
        else
            dispatch(_onSignupTypeChange('customer'));
    }

    //Toggle Privacy Check
    const _togglePrivacyCheck = () => {
        if(privacy)
            dispatch(_onSignupPrivacyTick(false));
        else
            dispatch(_onSignupPrivacyTick(true));
    }

    useEffect(()=>{
        alert(JSON.stringify(sta));
    },[])
    
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

                    <View style={Styles._typeSelectionView}>
                        <TouchableOpacity
                            onPress={()=>{ _toggleUserType() }}
                            style={Styles._selectionContainer}
                        >
                            {
                                type == 'customer' ? (
                                    <Icon name='check' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} style={Styles._tickIcon} />
                                ):(
                                    null
                                )   
                            }
                            <Icon name='user' size={SCREEN_ICON_SIZE * 3} color={COLORS.primaryColor} />
                            <Text style={Styles._selectionText}>Customer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{ _toggleUserType() }}
                            style={Styles._selectionContainer}
                        >   
                            {
                                type == 'restaurant' ? (
                                    <Icon name='check' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} style={Styles._tickIcon} />
                                ):(
                                    null
                                )   
                            }
                            <IonIcons name='restaurant' size={SCREEN_ICON_SIZE * 3} color={COLORS.primaryColor} />
                            <Text style={Styles._selectionText}>Restaurant</Text>
                        </TouchableOpacity>
                    </View>

                    <Input 
                        inputWidth='89%'
                        iconname='user'
                        iconColor={COLORS.primaryColor}
                        placeholder={type == 'customer' ? 'Name':'Restaurant Name'}
                    />
                    <Input 
                        inputWidth='89%'
                        iconname='phone'
                        iconColor={COLORS.primaryColor}
                        placeholder='Mobile Number'
                        isNumber={true}
                        containerStyle={{ marginTop: SPACING }}
                    />
                    <Input 
                        inputWidth='89%'
                        iconname='envelope'
                        iconColor={COLORS.primaryColor}
                        placeholder='Email'
                        containerStyle={{ marginTop: SPACING }}
                    />
                    <Input 
                        inputWidth='89%'
                        iconname='lock'
                        iconColor={COLORS.primaryColor}
                        placeholder='Password'
                        containerStyle={{ marginTop: SPACING }}
                        isPassword={true}
                    />
                    
                    <View style={Styles._termsMainView}>
                        <CheckBox
                            value={privacy}
                            onValueChange={_togglePrivacyCheck}
                            boxType='circle'
                            tintColor={COLORS.whiteColor}
                            tintColors={{
                                true: COLORS.primaryColor,
                                false: COLORS.whiteColor,
                            }}
                            onCheckColor={COLORS.primaryColor}
                            onTintColor={COLORS.primaryColor}
                            disabled={false}
                        />
                        <Text style={Styles._terms}>By Clicking sign up, you are agree to our <Text onPress={()=>{ _openLink('https://sites.google.com/view/bachat-privacy-policy') }} style={Styles._termsMain}>Privacy Policy</Text> and <Text onPress={()=>{ _openLink('https://sites.google.com/view/bachat-terms-conditions') }} style={Styles._termsMain}>Terms Conditions</Text></Text>
                    </View>

                    <Button 
                        onPress={()=>{ _gotoRestaurant(navigation) }}
                        title='sign up'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                        style={{ marginTop: '10%' }}
                    />
                    <Text style={Styles._bottomText}>Already have an account? <Text onPress={()=>{ _gotoLogin(navigation) }} style={Styles._bottomMainText}>Login</Text></Text>

                </View>
        
            </ScrollView>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _background:{
        position: 'absolute',
        width: MOBILE_WIDTH,
        height: MOBILE_HEIGHT,
        resizeMode: 'cover',
    },
    _scrollContainer:{
        paddingTop: '20%', 
        paddingBottom: MOBILE_HEIGHT / 2,
        alignItems: 'center',
        padding: SPACING * 2,
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
    _typeSelectionView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING * 2,
    },
    _tickIcon:{
        position: 'absolute',
        top: SPACING,
        right: SPACING,
    },
    _selectionContainer:{
        width: MOBILE_WIDTH * 0.35,
        height: MOBILE_WIDTH * 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryColor,
        borderWidth: 2,
        borderRadius: RADIUS,
    },
    _selectionText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.whiteColor,
        textAlign: 'center',
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
    _termsMainView:{
        marginTop: SPACING * 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    _terms:{
        width: '87%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.whiteColor,
        marginLeft: SPACING,
        lineHeight: 20
    },
    _termsMain:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.primaryColor,
    }
})

export default Signup;