import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import { List } from 'react-native-paper';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, RADIUS, SPACING } from '../../config/config';

const FAQ = () => {
    return(
        <View style={Styles._mainContainer}>
            <Image source={IMAGES.header} style={Styles._header} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={Styles._scrollContainer}
            >
                <Text style={Styles._info}>Sint id excepteur deserunt do proident duis dolore veniam magna aliqua non ipsum consequat.</Text>
                
                <View style={Styles._accordionMainView}>
                    <List.AccordionGroup>
                        {/* Question 1 Section */}
                        <List.Accordion 
                            title="Question 1" 
                            id="1"
                            titleNumberOfLines={5}
                            style={Styles._accordionHeaderView}
                            titleStyle={Styles._accordionHeaderText}>
                                <View style={Styles._accordionBodyView}>
                                    <Text style={Styles._answer}>Answer</Text>
                                </View>
                        </List.Accordion>

                        {/* Question 2 Section */}
                        <List.Accordion 
                            title="Question 2" 
                            id="2"
                            titleNumberOfLines={5}
                            style={Styles._accordionHeaderView}
                            titleStyle={Styles._accordionHeaderText}>
                                <View style={Styles._accordionBodyView}>
                                    <Text style={Styles._answer}>Answer</Text>
                                </View>
                        </List.Accordion>
                        
                        {/* Question 3 Section */}
                        <List.Accordion 
                            title="Question 3" 
                            id="3"
                            titleNumberOfLines={5}
                            style={Styles._accordionHeaderView}
                            titleStyle={Styles._accordionHeaderText}>
                                <View style={Styles._accordionBodyView}>
                                    <Text style={Styles._answer}>Answer</Text>
                                </View>
                        </List.Accordion>
                        
                        {/* Question 4 Section */}
                        <List.Accordion 
                            title="Question 4" 
                            id="4"
                            titleNumberOfLines={5}
                            style={Styles._accordionHeaderView}
                            titleStyle={Styles._accordionHeaderText}>
                                <View style={Styles._accordionBodyView}>
                                    <Text style={Styles._answer}>Answer</Text>
                                </View>
                        </List.Accordion>
            
                    </List.AccordionGroup>
                </View>
                
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
    _accordionMainView:{
        marginTop: SPACING,
    },
    _accordionHeaderView:{
        backgroundColor: COLORS.lightGrey,
        borderRadius: RADIUS,
        marginTop: SPACING,
    },
    _accordionHeaderText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _accordionBodyView:{
        paddingHorizontal: SPACING * 2,
        paddingTop: SPACING,
    },
    _answer:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor
    },
});

export default FAQ;