import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, SPACING } from '../../config/config';

const AboutUs = () => {
    return(
        <View style={Styles._mainContainer}>
            <Image source={IMAGES.header} style={Styles._header} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Styles._scrollContainer}
            >
                <Text style={Styles._info}>Reprehenderit nulla dolore irure labore nisi commodo proident. Aute ullamco occaecat amet voluptate ad cillum reprehenderit ut veniam exercitation est veniam. Dolore incididunt ex ipsum reprehenderit. Quis consectetur qui nisi minim labore pariatur cillum minim laboris in deserunt exercitation.</Text>
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
        color: COLORS.secondaryColor
    },
});

export default AboutUs;