import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker } from 'react-native-maps';
import { AppBar, LabelInput } from '../../components';
import { COLORS, INPUT_HEIGHT, MOBILE_WIDTH, PLATFORM, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';

const AddBranch = () => {

    const _showAlert = () => {
        Alert.alert(
            "Alert",
            "Do you really want to add this location?",
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
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />
            <View style={Styles._topView}>
                <LabelInput 
                    containerWidth='85%'
                    label=''
                    placeholder='Branch Name'
                />
                <TouchableOpacity
                    onPress={()=>{ _showAlert() }}
                    style={Styles._saveBtn}
                >
                    <Icon 
                        name='check'
                        size={SCREEN_ICON_SIZE}
                        color={COLORS.whiteColor}
                    />
                </TouchableOpacity>
            </View>
            <MapView
                style={Styles._mapView}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker 
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </MapView>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _topView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: MOBILE_WIDTH,
        position: 'absolute',
        top: '0%',
        paddingHorizontal: SPACING * 2,
        zIndex: 1,
    },
    _saveBtn:{
        width: INPUT_HEIGHT,
        height: INPUT_HEIGHT,
        borderRadius: RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primaryColor,
        marginTop: PLATFORM === 'ios' ? SPACING:SPACING * 2,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
    },
    _mapView:{
        flex: 1,
    },
});

export default AddBranch;