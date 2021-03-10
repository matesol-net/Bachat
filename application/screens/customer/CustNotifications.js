import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, DUMMY, FONT, FONT_SIZES, MOBILE_WIDTH, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';

const CustNotifications = () => {
    return(
        <View style={Styles._mainContainer}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
                data={DUMMY}
                keyExtractor={item => item.key}
                renderItem={({item, index})=>{
                    return(
                        <View>
                            <TouchableOpacity
                                onPress={()=>{  }}
                                style={Styles._itemContainer}
                            >
                                {/* Date View */}
                                <View style={Styles._box}>
                                    <Icon name='check' size={SCREEN_ICON_SIZE} color={COLORS.whiteColor} />
                                </View>
                                <View style={Styles._rightMainView}>
                                    <View style={Styles._titleDateView}>
                                        <Text style={Styles._title}>Title</Text>
                                        <Text style={Styles._date}>11:52 A.M (12 Sep, 2020)</Text>
                                    </View>
                                    <Text style={Styles._description}>Description</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingBottom: SPACING,
        marginBottom: SPACING,
    },
    _box:{
        width: MOBILE_WIDTH * 0.1,
        height: MOBILE_WIDTH * 0.1,
        borderRadius: RADIUS,
        backgroundColor: COLORS.greenColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    _rightMainView:{
        width: '87%',
        marginLeft: SPACING / 2
    },
    _titleDateView:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingBottom: SPACING / 2
    },
    _title:{
        width: '40%',
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
    },
    _date:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        fontWeight: 'bold',
        color: COLORS.greyColor,
    },
    _description: {
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor,
    }
});

export default CustNotifications;