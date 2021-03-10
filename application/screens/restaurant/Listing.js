import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Switch
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { COLORS, DUMMY, FONT, FONT_SIZES, MOBILE_WIDTH, RADIUS, SPACING } from '../../config/config';
import { AppBar } from '../../components';
import { _gotoEditItem } from '../../navigation/service';

const Listing = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />
            <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
                data={DUMMY}
                keyExtractor={item => item.key}
                renderItem={({item, index})=>{
                    return(
                        <Animatable.View
                            animation={'fadeInLeft'}
                            duration={500}
                            delay={index * 200 + 400}                        
                        >
                            <TouchableOpacity
                                onPress={()=>{ _gotoEditItem(navigation, item ) }}
                                style={Styles._itemContainer}
                            >
                                <View style={Styles._topView}>
                                    <Image 
                                        source={require('../../assets/images/item.jpg')} 
                                        style={Styles._image}    
                                    />
                                    <View style={Styles._detailsView}>
                                        <Text style={Styles._title}>Title</Text>
                                        <Text style={Styles._category}>Category</Text>
                                        <Switch
                                            trackColor={{ false: COLORS.greyColor, true: COLORS.lightGrey }}
                                            thumbColor={isEnabled ? COLORS.greenColor : COLORS.lightGrey}
                                            ios_backgroundColor={COLORS.greyColor}
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                            style={{ alignSelf: 'flex-start' }}
                                        />
                                    </View>
                                </View>

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
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150,
    },
    _itemContainer:{
        borderRadius: RADIUS,
        padding: SPACING,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.blackColor,
        shadowOffset: {width: 3,height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        marginBottom: SPACING,
    },
    _topView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    _image:{
        width: MOBILE_WIDTH * 0.2,
        height: MOBILE_WIDTH * 0.25,
        resizeMode: 'cover',
        borderRadius: RADIUS,
    },
    _detailsView:{
        width: '73%',
        marginLeft: SPACING,
    },
    _title:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.blackColor,
    },
    _category:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        marginVertical: SPACING / 2
    },
    _price:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.primaryColor,
        fontStyle: 'italic',
    },
});

export default Listing;