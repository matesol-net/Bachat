import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { _openLink } from '../../utils/linking';

const FollowUs = () => {
    return(
        <View style={Styles._mainContainer}>
            <Image source={IMAGES.header} style={Styles._header} />
            <View style={Styles._bottomView}>
                <Text style={Styles._info}>You can follow us on:</Text>
                <View style={Styles._buttonMainView}>
                    <TouchableOpacity
                        onPress={()=>{ _openLink('https://www.facebook.com/splbachat/') }}
                        style={Styles._button}
                    >
                        <Icon name='facebook' size={SCREEN_ICON_SIZE + 10} color={COLORS.whiteColor} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{ _openLink('https://www.instagram.com/splbachat/?hl=en') }}
                        style={Styles._button}
                    >
                        <Icon name='instagram' size={SCREEN_ICON_SIZE + 10} color={COLORS.whiteColor} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{ _openLink('https://twitter.com/splbachat?lang=en') }}
                        style={Styles._button}
                    >
                        <Icon name='twitter' size={SCREEN_ICON_SIZE + 10} color={COLORS.whiteColor} />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _header:{
        width: MOBILE_WIDTH,
        height: MOBILE_WIDTH * 0.7,
        resizeMode: 'cover'
    },
    _bottomView:{
        padding: SPACING * 2,
    },
    _scrollContainer:{
        padding: SPACING * 2,
    },
    _info:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor
    },
    _buttonMainView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SPACING,
    },
    _button:{
        width: MOBILE_WIDTH * 0.15,
        height: MOBILE_WIDTH * 0.15,
        borderRadius: RADIUS,
        backgroundColor: COLORS.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
    },
});

export default FollowUs;