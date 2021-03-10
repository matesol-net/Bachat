import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { AppBar, Button } from '../../components';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, SPACING, ZOOM_ANIMATION } from '../../config/config';
import { _gotoCustomer } from '../../navigation/service';

const Confirmation = ({navigation,route}) => {

    const { order } = route.params;

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                backgroundColor={COLORS.whiteColor}
                barStyle='dark'
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <Animatable.Image
                    animation={ZOOM_ANIMATION}
                    duration={2000}
                    source={IMAGES.confirmation} 
                    style={Styles._image} 
                />
                <Text style={Styles._info}>Your Order (11323) has been placed successfully. Please pick your order on time. Thank you</Text>
                <Button 
                    onPress={()=>{ _gotoCustomer(navigation) }}
                    width='100%'
                    title='Explore More'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                    style={Styles._btn}
                />
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _scrollContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING * 2,
    },
    _image:{
        width: MOBILE_WIDTH * 0.9,
        height: MOBILE_WIDTH * 0.9,
        resizeMode: 'contain',
    },
    _info:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginTop: -SPACING * 4,
        textAlign: 'center',
    },
    _btn:{
        marginTop: SPACING * 4,
    }
});

export default Confirmation;