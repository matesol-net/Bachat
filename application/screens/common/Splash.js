import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { ZOOM_ANIMATION, APPNAME, COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_HEIGHT, MOBILE_WIDTH, SPACING } from '../../config/config';
import { AppBar, Spinner } from '../../components';
import { _gotoWelcome } from '../../navigation/service';

const Splash = ({navigation}) => {

    useEffect(()=>{
        setTimeout(() => {
            _gotoWelcome(navigation);
        }, 2000);
    },[])

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.secondaryColor}
                hidden={true}
            />
            <Image source={IMAGES.splashBg} style={Styles._background} />
            <Animatable.View 
                animation={ZOOM_ANIMATION}
                duration={1000}
                style={Styles._logoView}
            >
                <Image source={IMAGES.logo} style={Styles._logo} />
                <Text style={Styles._appName}>{APPNAME}</Text>
            </Animatable.View>
            <Spinner 
                color={COLORS.primaryColor}
                style={Styles._spinner}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
    },
    _background:{
        position: 'absolute',
        width: MOBILE_WIDTH,
        height: MOBILE_HEIGHT,
        resizeMode: 'cover',
    },
    _logoView:{
        position: 'absolute',
        top: '20%',
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
    _spinner:{
        position: 'absolute',
        bottom: '15%',
    },
})

export default Splash;