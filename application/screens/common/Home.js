import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Slider from '@react-native-community/slider';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppBar, Button } from '../../components';
import { COLORS, CUISINES, DUMMY, FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { _gotoDetails, _gotoRestDetails } from '../../navigation/service';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');
    const [filterModal, setFilterModal] = useState(false);
    const [sliderValue, setSliderValue] = useState(100);
    

    //Input Handler
    const _searchInputHandler = (search) => {
        setSearch(search);
    } 

    //On Slider Value Change
    const _onSliderValueChange = (value) => {
        value = Math.floor(value)
        setSliderValue(value);
    }

    //Toggle Filter Modal
    const _toggleFilterModal = () => {
        if(filterModal)
            setFilterModal(false);
        else
            setFilterModal(true);
    }

    //Effect to set Top Header Location
    useEffect(()=>{
        navigation.setOptions({
            headerTitleAlign: 'left',
            headerTitle: ()=>(
                <TouchableOpacity
                
                >
                    <Text style={Styles._currentLocation}>Current Location</Text>
                    <Text style={Styles._location}>Kohinoor</Text>
                </TouchableOpacity>
            )
        })
    },[])

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />

            {/* Filter Modal */}
            <Modal
                onBackButtonPress={_toggleFilterModal}
                onBackdropPress={_toggleFilterModal}
                isVisible={filterModal}
            >
                <View style={Styles._filterMainModal}>
                    <View style={Styles._modalHeaderView}>
                        <Text style={Styles._modalHeading}>Filters</Text>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={Styles._filterScrollView}
                    >
                        <Text style={Styles._label}>Price {'('+ sliderValue +')'}</Text>
                        <Slider
                            style={Styles._sliderStyle}
                            minimumValue={100}
                            maximumValue={10000}
                            step={50}
                            minimumTrackTintColor={COLORS.primaryColor}
                            maximumTrackTintColor={COLORS.secondaryColor}
                            thumbTintColor={COLORS.primaryColor}
                            value={sliderValue}
                            onValueChange={_onSliderValueChange}
                        />
                        <Text style={Styles._label}>Cuisine</Text>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            data={CUISINES}
                            numColumns={'2'}
                            contentContainerStyle={Styles._cuisineScrollContainer}
                            keyExtractor={item => item.key}
                            renderItem={({item, index})=>{
                                return(
                                    <View style={index%2 == 0 ? Styles._cuisineContainer:[Styles._cuisineContainer,{ position: 'absolute', right: 0 }]}>
                                        <CheckBox
                                            boxType='cirlce'
                                            tintColor={COLORS.secondaryColor}
                                            tintColors={{
                                                true: COLORS.primaryColor,
                                                false: COLORS.secondaryColor,
                                            }}
                                            onCheckColor={COLORS.primaryColor}
                                            onTintColor={COLORS.primaryColor}
                                            disabled={false}
                                            // value={toggleCheckBox}
                                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        />
                                        <Text style={Styles._cuisine}>{item.name}</Text>
                                    </View>
                                );
                            }}
                        />
                        <Button 
                            title='apple filters'
                            titleColor={COLORS.whiteColor}
                            backgroundColor={COLORS.primaryColor}
                        />
                        <Button 
                            title='reset filters'
                            titleColor={COLORS.whiteColor}
                            backgroundColor={COLORS.secondaryColor}
                            style={{ marginTop: SPACING }}
                        />
                        <Button 
                            onPress={_toggleFilterModal}
                            title='close'
                            titleColor={COLORS.greyColor}
                            style={{ marginTop: SPACING }}
                        />
                    </ScrollView>
                </View>
            </Modal>


            <View style={Styles._topBar}>
                <View style={Styles._searchView}>
                    <TextInput 
                        selectionColor={COLORS.primaryColor}
                        placeholder='Search'
                        value={search}
                        onChangeText={_searchInputHandler}
                        style={Styles._searchInput}
                    />
                    <Icon name='search' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} />
                </View>
                <TouchableOpacity
                    onPress={_toggleFilterModal}
                    style={Styles._filterBtn}
                >
                    <Icon name='filter' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} />
                </TouchableOpacity>
            </View>

            <FlatList 
                contentContainerStyle={Styles._scrollContainer}
                showsVerticalScrollIndicator={false}
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
                                onPress={()=>{ _gotoDetails(navigation, item) }}
                                style={Styles._itemContainer}
                            >
                                <View style={Styles._namepriceView}>
                                    <Text style={Styles._itemname}>Item Name</Text>
                                    <Text style={Styles._itemPrice}>Rs. 150</Text>
                                </View>
                                <View style={Styles._timecategoryView}>
                                    <Text style={Styles._category}>Category</Text>
                                    <Text style={Styles._time}>12 Sep, 2020 (12:53 A.M)</Text>
                                </View>
                                <View style={Styles._imgContainer}>
                                    <Image source={require('../../assets/images/item.jpg')} style={Styles._itemimg} />
                                </View>
                                
                                <View style={Styles._restaurantView}>
                                    <View style={Styles._ratingMainView}>
                                        <Text onPress={()=>{ _gotoRestDetails(navigation, {}) }} style={Styles._restaurantName}>Restaurant Name</Text>
                                        <View style={Styles._ratingView}>
                                            <Icon 
                                                name='star'
                                                size={SCREEN_ICON_SIZE - 5}
                                                color={COLORS.starColor}
                                            />
                                            <Text style={Styles._rating}>5</Text>
                                        </View>
                                    </View>
                                    
                                    <View style={Styles._iconView}>
                                        <Icon name='heart-o' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} />
                                        <Icon name='share-alt' size={SCREEN_ICON_SIZE} color={COLORS.primaryColor} />
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
    _currentLocation:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.whiteColor,
    },
    _location:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        color: COLORS.whiteColor,
    },
    _topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING,
    },
    _searchView:{
        width: '85%',
        height: INPUT_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SPACING,
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 10,
    },
    _searchInput:{
        width: '87%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.secondaryColor,
        marginRight: SPACING,
    },
    _filterBtn:{
        width: INPUT_HEIGHT,
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 10,
    },
    _scrollContainer:{
        padding: SPACING,
        paddingBottom: 100,
    },
    _itemContainer:{
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 10,
        marginBottom: SPACING,
    },
    _namepriceView:{
        paddingHorizontal: SPACING,
        paddingTop: SPACING,
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
    _timecategoryView:{
        paddingHorizontal: SPACING,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SPACING/2,
        marginBottom: SPACING,
    },
    _category:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
    },
    _time:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        color: COLORS.secondaryColor,
    },
    _imgContainer:{
        width: '100%',
        height: 150,
    },
    _itemimg:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    _restaurantView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING,
    },
    _ratingMainView:{
        width: '80%',
    },
    _ratingView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING / 2
    },
    _rating:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.starColor,
        marginLeft: SPACING / 2
    },
    _restaurantName:{
        width: '80%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        color: COLORS.secondaryColor,
        textDecorationLine: 'underline'
    },
    _iconView:{
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    _filterMainModal:{
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
    },
    _modalHeaderView:{
        padding: SPACING,
        alignItems: 'center',
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 1,
    },
    _modalHeading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _filterScrollView:{
        padding: SPACING,
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginBottom: SPACING / 2
    },
    _sliderStyle:{
        width: '100%', 
        height: 40,
        marginBottom: SPACING
    },
    _cuisineScrollContainer:{
        marginBottom: SPACING
    },
    _cuisineContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING
    },
    _cuisine:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor,
        marginLeft: SPACING / 2
    },
});

export default Home;