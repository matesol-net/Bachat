import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';

import { AppBar, BorderedButton, Button } from '../../components';
import { APPNAME, COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_HEIGHT, MOBILE_WIDTH, SPACING } from '../../config/config';
import { _gotoGuest, _gotoLogin, _gotoSignup } from '../../navigation/service';

const Welcome = ({navigation}) => {
    
    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                hidden={true}
                barStyle='light'
                backgroundColor={COLORS.secondaryColor}
            />
            <Image source={IMAGES.splashBg} style={Styles._background} />
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <View style={Styles._logoView}>
                    <Image source={IMAGES.logo} style={Styles._logo} />
                    <Text style={Styles._appName}>{APPNAME}</Text>
                </View>
                <View style={Styles._btnContainer}>
                    <Button 
                        onPress={()=>{ _gotoLogin(navigation) }}
                        title='login'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                    />
                    <Button 
                        onPress={()=>{ _gotoSignup(navigation) }}
                        title='sign up'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.secondaryColor}
                        style={{ marginTop: SPACING }}
                    />
                    <BorderedButton 
                        onPress={()=>{ _gotoGuest(navigation) }}
                        title='continue as guest'
                        titleColor={COLORS.primaryColor}
                        borderColor={COLORS.primaryColor}
                        style={{ marginTop: SPACING }}
                    />
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    _btnContainer:{
        width: '100%',
        marginTop: '30%',
    },
})

export default Welcome;