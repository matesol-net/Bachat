import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppBar } from '../../components';
import { COLORS, DUMMY, FONT, FONT_SIZES, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { _gotoAddBranch } from '../../navigation/service';

const Branches = ({navigation}) => {
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
                                onPress={()=>{  }}
                                style={Styles._itemContainer}
                            >
                                <Text style={Styles._name}>Branch Name</Text>
                                <Text style={Styles._address}>Branch Address</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    );
                }}
            />
            <ActionButton 
                onPress={()=>{ _gotoAddBranch(navigation) }}
                buttonColor={COLORS.primaryColor}
                renderIcon={()=>(<Icon name='plus' size={SCREEN_ICON_SIZE} color={COLORS.whiteColor} />)}
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
        padding: SPACING,
        borderRadius: RADIUS,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
        marginBottom: SPACING * 2
    },
    _name:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _address:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.greyColor,
        marginTop: SPACING / 2
    },
});

export default Branches;