import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Text
} from 'react-native';

import { COLORS, FONT, FONT_SIZES, INPUT_HEIGHT, RADIUS, SPACING } from '../../config/config';
import { Button, LabelInput } from '../../components';

const Complaint = () => {
    return(
        <View style={Styles._mainContainer}>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <LabelInput
                    label='Title'
                    placeholder='Title'
                />
                <Text style={Styles._label}>Message</Text>
                <TextInput 
                    placeholder='Message'
                    multiline={true}
                    numberOfLines={5}
                    style={Styles._input}
                />
                <Button 
                    title='SUBMIT'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                    style={{ marginTop: SPACING * 2 }}
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
        padding: SPACING,
        paddingBottom: 150,
    },
    _input:{
        height: INPUT_HEIGHT * 3,
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        color: COLORS.secondaryColor,
        borderRadius: RADIUS,
        paddingHorizontal: SPACING,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        marginTop: SPACING / 2
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    }
});

export default Complaint;