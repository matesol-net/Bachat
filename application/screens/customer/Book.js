import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Picker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SPACING, MOBILE_WIDTH, RADIUS, FONT, FONT_SIZES, COLORS, SCREEN_ICON_SIZE, INPUT_HEIGHT, PAYMENT_OPTIONS, PLATFORM } from '../../config/config';
import { Button, DateTimePicker, ViewImageModal } from '../../components';
import { _gotoConfirmation } from '../../navigation/service';
import { _getCurrentServerTime, _getFormattedDate, _getFormattedTime } from '../../utils/TimeFunctions';

const Book = ({navigation}) => {

    const [imageModal, setImageModal] = useState(false);
    const [quantity, setQuantity] = useState(1);

    //Date and Time
    const minimumDate = _getCurrentServerTime();
    minimumDate.setHours(minimumDate.getHours(),minimumDate.getMinutes()+30,0,0);
    
    const [date, setDate] = useState(minimumDate);
    const [formattedDate, setFormattedDate] = useState(_getFormattedDate(date));
    const [formattedTime, setFormattedTime] = useState(_getFormattedTime(date));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setFormattedDate(_getFormattedDate(currentDate));
        setDate(currentDate);
        setShow(Platform.OS === 'ios');
        if(currentDate < minimumDate && mode == 'time')
            alert("You selected invalid time");
        else
            setFormattedTime(_getFormattedTime(currentDate));
        
    };
    
    const showMode = (currentMode) => {
        if(show){
            setShow(false);
        }
        else{
            setShow(true);
            setMode(currentMode);
        }
    };
    
    const showDatepicker = () => {
        showMode('date');
    };
    
    const showTimepicker = () => {
        showMode('time');
    };

    //On Plus Button Click
    const _onPlusBtnClick = () => {
        setQuantity(quantity + 1);
    }

    //On Minus Button Click
    const _onMinusBtnClick = () => {
        if(quantity <= 1)
            alert("Quantity can't be zero");
        else
            setQuantity(quantity - 1);
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

            {/* Modal for Date & Time Picker for IOS only */}
            {
                PLATFORM === 'ios' ? (
                    <DateTimePicker 
                        isVisible={show}
                        date={date}
                        mode={mode}
                        closeBtn={showMode}
                        onDateChange={onChange}
                        minimumDate={minimumDate}
                    />
                ):(
                    null
                )
            }
            

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

                {/* Select Quantity */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={[Styles._section,{ borderTopColor: COLORS.borderColor, borderTopWidth: 1, marginTop: SPACING }]}
                >
                    <Text style={Styles._heading}>Selected Quantity</Text>
                    <View style={Styles._quantitySelectionView}>
                        <TouchableOpacity
                            onPress={()=>{ _onMinusBtnClick() }}
                            style={Styles._plusBtn}
                        >
                            <Icon name='minus' size={SCREEN_ICON_SIZE} color={COLORS.whiteColor} />
                        </TouchableOpacity>
                        <TextInput 
                            placeholder='Selected Quantity'
                            value={String(quantity)}
                            editable={false}
                            style={Styles._quantity}
                        />
                        <TouchableOpacity
                            onPress={()=>{ _onPlusBtnClick() }}
                            style={Styles._minusBtn}
                        >
                            <Icon name='plus' size={SCREEN_ICON_SIZE} color={COLORS.whiteColor} />
                        </TouchableOpacity>
                    </View>
                </Animatable.View>

                {/* Pickup Time Section */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Pickup Date & Time</Text>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._info}>Your Pickup Date</Text>
                        <Text onPress={showDatepicker} style={Styles._info2}>{formattedDate}</Text>
                    </View>
                    <View style={Styles._flexRow}>
                        <Text style={Styles._info}>Your Pickup Time</Text>
                        <Text onPress={showTimepicker} style={Styles._info2}>{formattedTime}</Text>
                    </View>
                </Animatable.View>

                {
                    PLATFORM === 'android' && show && 
                    <Picker
                        minimumDate={minimumDate}
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={PLATFORM === 'android'?false:true}
                        display="default"
                        onChange={onChange}
                    />
                }

                {/* Payment Method */}
                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._section}
                >
                    <Text style={Styles._heading}>Payment Method</Text>
                    <RadioButtonRN
                        data={PAYMENT_OPTIONS}
                        box={false}
                        initial={1}
                        animationTypes={['shake']}
                        textStyle={{
                            fontFamily: FONT,
                            fontSize: FONT_SIZES.info1,
                            color: COLORS.secondaryColor
                        }}
                        icon={
                            <Icon
                                name="check-circle"
                                size={SCREEN_ICON_SIZE}
                                color={COLORS.greenColor}
                            />
                        }
                        selectedBtn={(e) => console.log(e)}
                    />
                </Animatable.View>

                <Animatable.View 
                    animation={'fadeInRight'}
                    duration={2000}
                    style={Styles._confirmBtn}
                >
                    <Button
                        onPress={()=>{ _gotoConfirmation(navigation,{}) }}
                        title='Confirm Booking'
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
    _quantitySelectionView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: SPACING
    },
    _quantity:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor,
        width: '70%',
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.blackColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        paddingHorizontal: SPACING,
        alignItems: 'center',
        textAlign: 'center'
    },
    _plusBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: INPUT_HEIGHT,
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        backgroundColor: COLORS.greyColor,
        shadowColor: COLORS.blackColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
    },
    _minusBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: INPUT_HEIGHT,
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        backgroundColor: COLORS.greyColor,
        shadowColor: COLORS.blackColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
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
        position: 'absolute',
        right: 0,
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _confirmBtn:{
        marginTop: SPACING * 2,
    },
});

export default Book;