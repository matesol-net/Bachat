import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Alert
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { AppBar, Button, ViewImageModal } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONT, FONT_SIZES, MOBILE_WIDTH, PLATFORM, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';

const CustOrderDetails = ({navigation, route}) => {

    const { screen } = route.params;

    const [imageModal, setImageModal] = useState(false);

    //Cancel Alert
    const _showCancelAlert = () => {
        Alert.alert(
            "Alert",
            "Do you really want to cancel the order?",
            [
                {
                    text: "No",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") }
            ],
            { cancelable: true }
        );
    }

    //Toggle Image Modal
    const _toggleViewImageModal = () => {
        if(imageModal)
            setImageModal(false);
        else
            setImageModal(true);
    }

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                hidden={PLATFORM === 'android'?true:false}
                barStyle='light'
            />

            {/* Modal For Full Screen Image */}
            <ViewImageModal 
                image={require('../../assets/images/item.jpg')}
                onPress={()=>{ _toggleViewImageModal() }}
                isVisible={imageModal}
            />
            
            <View style={Styles._imgContainer}>
                <Image 
                    source={require('../../assets/images/item.jpg')}
                    style={Styles._image}
                />
                <Icon 
                    onPress={()=>{ _toggleViewImageModal() }}
                    name='eye'
                    size={SCREEN_ICON_SIZE}
                    color={COLORS.whiteColor}
                    style={{ position: 'absolute', right: SPACING * 2, bottom: SPACING * 2 }}
                />
            </View>
            <ScrollView
                contentContainerStyle={Styles._scrollContainer}
            >
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._namepriceView}
                >
                    <Text style={Styles._itemname}>Title</Text>
                    <Text style={Styles._itemPrice}>Rs. 40</Text>
                </Animatable.View>
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Order Details</Text>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Order ID</Text>
                        <Text style={Styles._value}>1013</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Quantity</Text>
                        <Text style={Styles._value}>3</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Order Price</Text>
                        <Text style={Styles._value}>Rs. 40</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Order Time</Text>
                        <Text style={Styles._value}>12:12 P.M (12 sep, 2019)</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Pickup Time</Text>
                        <Text style={Styles._value}>12:12 P.M (12 sep, 2019)</Text>
                    </View>
                    {
                        screen == 'completed' ? (
                            <View style={Styles._flexRow}>
                                <Text style={Styles._label}>Actual Pickup Time</Text>
                                <Text style={Styles._value}>12:12 P.M (12 sep, 2019)</Text>
                            </View>
                        ):(
                            null
                        )
                    }
                    {
                        screen == 'cancelled' ? (
                            <View style={Styles._flexRow}>
                                <Text style={Styles._label}>Cancellation Time</Text>
                                <Text style={Styles._value}>12:12 P.M (12 sep, 2019)</Text>
                            </View>
                        ):(
                            null
                        )
                    }
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Restaurant</Text>
                        <Text style={Styles._value}>Haseeb Ahmed</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._label}>Payment Method</Text>
                        <Text style={Styles._value}>Cash On Delivery</Text>
                    </View>
                    {
                        screen == 'cancelled' ? (
                            <View style={Styles._cancelResonView}>
                                <Text style={Styles._label}>Cancellation Reason</Text>
                                <Text style={Styles._value}>Reson</Text>
                            </View>
                            
                        ):(
                            null
                        )
                    }
                </Animatable.View>

                {
                    screen === 'pending' ? (
                        <Animatable.View
                            animation={'fadeInRight'}
                            duration={2000}
                            style={Styles._buttonView}
                        >
                            <Button 
                                onPress={()=>{ _showCancelAlert() }}
                                title='Cancel'
                                titleColor={COLORS.whiteColor}
                                backgroundColor={COLORS.redColor}
                            />
                        </Animatable.View>
                    ):(
                        null
                    )
                }
            </ScrollView>

        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _imgContainer:{
        width: '100%',
        height: MOBILE_WIDTH * 0.8,
        borderBottomLeftRadius: RADIUS * 3,
        borderBottomRightRadius: RADIUS * 3,
    },
    _image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderBottomLeftRadius: RADIUS * 3,
        borderBottomRightRadius: RADIUS * 3,
    },
    _namepriceView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    _itemname:{
        width: '75%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        textTransform: 'uppercase',
        textAlign: 'left',
    },
    _itemPrice:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.primaryColor,
        textAlign: 'right',
    },
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150
    },
    _section:{
        borderTopColor: COLORS.borderColor,
        borderTopWidth: 1,
        paddingVertical: SPACING,
        marginTop: SPACING
    },
    _heading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _flexRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingVertical: SPACING,
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor
    },
    _value:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor
    },
    _buttonView:{
        marginTop: SPACING * 2
    },
    _cancelResonView: {
        marginTop: SPACING,
    },
});

export default CustOrderDetails;