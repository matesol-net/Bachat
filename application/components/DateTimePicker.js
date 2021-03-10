import React from 'react';
import {    
    StyleSheet,
    View,
    Text
} from 'react-native';

import Picker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import { COLORS, RADIUS, SPACING, FONT, FONT_SIZES } from '../config/config';
import { Button } from '.';

const DateTimePicker = ({isVisible, date, mode, onDateChange, closeBtn, minimumDate}) => {
    return(
        <Modal
            onBackButtonPress={closeBtn}
            onBackdropPress={closeBtn}
            isVisible={isVisible}
        >
            <View style={Styles._mainContainer}>
                <View style={Styles._headerView}>
                    <Text style={Styles._heading}>{mode == 'date'? 'Select Date':'Select Time'}</Text>
                </View>
                <Picker
                    minimumDate={minimumDate}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onDateChange}
                />
                <Button 
                    onPress={closeBtn}
                    title='Close'
                    titleColor={COLORS.greyColor}
                />
            </View>
        </Modal>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
        padding: SPACING,
    },
    _headerView:{
        paddingBottom: SPACING,
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    _heading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
});

export default DateTimePicker;