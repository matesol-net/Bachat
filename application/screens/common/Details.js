import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { SPACING, MOBILE_WIDTH, RADIUS, FONT, FONT_SIZES, COLORS, SCREEN_ICON_SIZE, PLATFORM } from '../../config/config';
import { AppBar, Button, ViewImageModal, AuthModal } from '../../components';
import { _gotoBookScreen, _gotoRestDetails, _gotoSplash } from '../../navigation/service';
import { _getItem } from '../../utils/async';

const Details = ({navigation, route}) => {
    
    const { item } = route.params;
    const [imageModal, setImageModal] = useState(false);
    const [isAuthModal, setAuthModal] = useState(false);

    //Toggle Image Modal
    const _toggleViewImageModal = () => {
        if(imageModal)
            setImageModal(false);
        else
            setImageModal(true);
    }

    //Close Auth Modal
    const _closeAuthModal = () => {
        setAuthModal(false);
    }

    //Go To Login/Signup
    const _onLoginSignupClick = () => {
        _gotoSplash(navigation);
        setAuthModal(false);
    }

    //On Book Button Click
    const _onBookButtonClick = (navigation) => {
        _getItem('user')
        .then((user)=>{
            if(user == 'guest')
                setAuthModal(true);
            else
                _gotoBookScreen(navigation);
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
        <View style={Styles._mainContainer}>

            <AppBar 
                barStyle='light'
                hidden={PLATFORM === 'android'?true:false}
            />

            {/* Modal for Auth */}
            <AuthModal 
                closeButton={_closeAuthModal}
                onLoginSignupClick={_onLoginSignupClick}
                isVisible={isAuthModal}
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
                    onPress={()=> { _toggleViewImageModal() }}
                    name='eye' 
                    color={COLORS.whiteColor} 
                    size={SCREEN_ICON_SIZE} 
                    style={{ position: 'absolute', right: SPACING * 2, bottom: SPACING * 2 }}
                />
            </View>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
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
                <Animatable.Text 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._category}
                >
                    Category
                </Animatable.Text>
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._actionBtnView}
                >
                    <TouchableOpacity
                        onPress={()=>{  }}
                        style={Styles._actionBtn}
                    >
                        <Icon name='heart' size={SCREEN_ICON_SIZE} color={COLORS.redColor} />
                        <Text style={Styles._likeCount}>22</Text>
                        <Text style={Styles._actionBtnText}>Likes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{  }}
                        style={Styles._actionBtn}
                    >
                        <Icon name='dropbox' size={SCREEN_ICON_SIZE} color={COLORS.secondaryColor} />
                        <Text style={Styles._reviewCount}>2</Text>
                        <Text style={Styles._actionBtnText}>Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{  }}
                        style={Styles._actionBtn}
                    >
                        <Icon name='share' size={SCREEN_ICON_SIZE} color={COLORS.secondaryColor} />
                        <Text style={Styles._actionBtnText}>Share</Text>
                    </TouchableOpacity>
                </Animatable.View>
                
                {/* Quantity Section */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Quantity</Text>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._info}>Available Quantity</Text>
                        <Text style={Styles._info2}>22</Text>
                    </View>
                </Animatable.View>

                {/* Address Section */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Address</Text>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._info}>Kohinoor, Jaranwala road, Faisalabad, Punjab</Text>
                        <Icon name='map-marker' size={SCREEN_ICON_SIZE} color={COLORS.secondaryColor} />
                    </View>
                </Animatable.View>
                {/* Restaurant Section */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Restaurant</Text>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._info}>Restaurant Name</Text>
                        <AntIcon onPress={()=>{ _gotoRestDetails(navigation, {}) }} name='arrowright' size={SCREEN_ICON_SIZE} color={COLORS.secondaryColor} />
                    </View>
                    <View style={Styles._ratingView}>
                        <AirbnbRating 
                            showRating={false}
                            count={5}
                            size={15}
                            selectedColor={COLORS.starColor}
                            isDisabled={true}
                            defaultRating={5}
                        />
                        <Text style={Styles._ratingCount}>(5)</Text>
                    </View>
                </Animatable.View>

                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._bookBtn}
                >
                    <Button 
                        onPress={()=>{ _onBookButtonClick(navigation) }}
                        title='Book'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                    />

                </Animatable.View>
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
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150
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
    _category:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        marginTop: SPACING / 2
    },
    _ratingView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING / 2,
    },
    _ratingCount:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        marginLeft: SPACING / 2
    },
    _actionBtnView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: COLORS.borderColor,
        borderTopWidth: 1,
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingVertical: SPACING,
        marginTop: SPACING
    },
    _actionBtn:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    _likeCount:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginLeft: SPACING / 2
    },
    _reviewCount:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginLeft: SPACING / 2
    },
    _actionBtnText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        textTransform: 'uppercase',
        marginLeft: SPACING / 2
    },
    _section:{
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingVertical: SPACING
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
        marginTop: SPACING / 2
    },
    _info:{
        width: '80%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor
    },
    _info2:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _bookBtn:{
        marginTop: SPACING * 2
    },
});

export default Details;