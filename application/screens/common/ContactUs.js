import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { _sendEmail, _dialNumber, _openMaps } from '../../utils/linking';

const ContactUs = () => {
    return(
        <View style={Styles._mainContainer}>
            <Image source={IMAGES.header} style={Styles._header} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Styles._scrollContainer}
            >
                <Text style={Styles._info}>Reprehenderit nulla dolore irure labore nisi commodo proident. Aute ullamco occaecat amet voluptate ad cillum reprehenderit ut veniam exercitation est veniam. Dolore incididunt ex ipsum reprehenderit. Quis consectetur qui nisi minim labore pariatur cillum minim laboris in deserunt exercitation.</Text>
                <View style={Styles._flexRow}>
                    <Text style={Styles._label}>abc@gmail.com</Text>
                    <Icon 
                        onPress={()=>{ _sendEmail('abc@gmail.com','Contact','') }}
                        name='envelope' 
                        size={SCREEN_ICON_SIZE} 
                        color={COLORS.secondaryColor} 
                    />
                </View>
                <View style={Styles._flexRow}>
                    <Text style={Styles._label}>+92 335 1234567</Text>
                    <Icon 
                        onPress={()=>{ _dialNumber('+92 335 1234567') }}
                        name='phone' 
                        size={SCREEN_ICON_SIZE} 
                        color={COLORS.secondaryColor} 
                    />
                </View>
                <View style={Styles._flexRow}>
                    <Text style={Styles._label}>Kohinoor, Jaranwala, Faisalabad</Text>
                    <Icon 
                        onPress={()=>{ _openMaps('https://goo.gl/maps/fNRYj8QSKL9ZMhs87') }}
                        name='map-marker' 
                        size={SCREEN_ICON_SIZE} 
                        color={COLORS.secondaryColor} 
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
    _header:{
        width: MOBILE_WIDTH,
        height: MOBILE_WIDTH * 0.7,
        resizeMode: 'cover'
    },
    _scrollContainer:{
        padding: SPACING * 2,
    },
    _info:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor,
        marginBottom: SPACING
    },
    _flexRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingBottom: SPACING,
        marginBottom: SPACING,
    },
    _label:{
        width: '85%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor
    },
    _value:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor
    },
});

export default ContactUs;