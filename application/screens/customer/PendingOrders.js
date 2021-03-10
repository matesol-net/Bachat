import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { COLORS, DUMMY, FONT, FONT_SIZES, MOBILE_WIDTH, RADIUS, SPACING } from '../../config/config';
import { AppBar, Button } from '../../components';
import { _gotoCustOrdersDetails } from '../../navigation/service';

const PendingOrders = ({navigation}) => {

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

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
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
                                onPress={()=>{ _gotoCustOrdersDetails(navigation, item, 'pending' ) }}
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
                                        <Text style={Styles._price}>Rs. 40</Text>
                                    </View>
                                </View>
                                <View style={Styles._btnView}>
                                    <Button 
                                        onPress={()=>{ _showCancelAlert() }}
                                        title='Cancel'
                                        titleColor={COLORS.whiteColor}
                                        backgroundColor={COLORS.redColor}
                                    />
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
    _btnView:{
        marginTop: SPACING
    },
});

export default PendingOrders;