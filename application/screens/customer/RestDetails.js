import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { AirbnbRating } from 'react-native-ratings';
import { COLORS, DUMMY, FONT, FONT_SIZES, MOBILE_WIDTH, RADIUS, SPACING, ZOOM_ANIMATION } from '../../config/config';
import { _gotoDetails } from '../../navigation/service';

const RestDetails = ({navigation}) => {
    return(
        <View style={Styles._mainContainer}>
            <Animatable.View 
                animation={'fadeInRight'}
                duration={2000}
                style={Styles._topView}
            >
                <Text style={Styles._name}>Restaurant Name</Text>
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
                <Animatable.Text 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._heading}
                >
                        Products
                </Animatable.Text>
            </Animatable.View>
            <FlatList 
                showsVerticalScrollIndicator={false}
                numColumns={'2'}
                contentContainerStyle={Styles._scrollContainer}
                data={DUMMY}
                keyExtractor={item => item.key}
                renderItem={({item, index})=>{
                    return(
                        <Animatable.View
                            animation={ZOOM_ANIMATION}
                            duration={500}
                            delay={index * 200 + 300}
                        >
                            <TouchableOpacity
                                onPress={()=>{ _gotoDetails(navigation, item) }}
                                style={Styles._itemContainer}
                            >
                                <View style={Styles._imageContainer}>
                                    <Image source={require('../../assets/images/item.jpg')} style={Styles._image} />
                                </View>
                                <Text style={Styles._title}>Title</Text>
                                <Text style={Styles._category}>Category</Text>
                                <Text style={Styles._price}>Rs 40</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    );
                }}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _topView:{
        padding: SPACING * 2,
    },
    _name:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h5,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
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
    _heading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginTop: SPACING
    },
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150,
    },
    _itemContainer:{
        width: MOBILE_WIDTH * 0.4,
        padding: SPACING,
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        margin: SPACING
    },
    _imageContainer:{
        width: (MOBILE_WIDTH * 0.4) / 2,
        height: (MOBILE_WIDTH * 0.4) / 2,
        borderRadius: (MOBILE_WIDTH * 0.4) / 4,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: RADIUS,
        elevation: 5,
        marginBottom: SPACING,
        alignSelf: 'center',
    },
    _image:{
        width: '100%',
        height: '100%',
        borderRadius: (MOBILE_WIDTH * 0.4) / 4,
        resizeMode: 'cover',
    },
    _title:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _category:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        marginVertical: SPACING / 3,
    },
    _price:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.primaryColor
    }
});

export default RestDetails;