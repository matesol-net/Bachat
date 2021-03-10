import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, BRANCHES, CUISINES_TYPES, FONT, FONT_SIZES, IMAGES, MOBILE_WIDTH, RADIUS, SCREEN_ICON_SIZE, SPACING } from '../../config/config';
import { AppBar, ViewImageModal, ImagePickerModal, LabelInput, Button } from '../../components';

const Add = () => {

    const [imgUri, setImgUri] = useState('');
    const [viewImage, setViewImage] = useState(false);
    const [imagePicker, setImagePicker] = useState(false);

    //Toggle View Image Modal
    const _toggleViewImageModal = () => {
        if(viewImage)
            setViewImage(false);
        else
            setViewImage(true);
    }
    //Toggle Image Picker Modal
    const _toggleImagePickerModal = () => {
        if(imagePicker)
            setImagePicker(false);
        else
            setImagePicker(true);
    }

    //Add Alert
    const _showAddAlert = () => {
        Alert.alert(
            "Alert",
            "Do you really want to add this item?",
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

    //Remove Image
    const _onRemoveImageClick = () => {
        setImgUri('');
    }

    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />

            <ImagePickerModal 
                isVisible={imagePicker}
                closeBtn={_toggleImagePickerModal}
            />

            {/* View Image Modal */}
            <ViewImageModal 
                image={IMAGES.loginBg}
                isVisible={viewImage}
                onPress={_toggleViewImageModal}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <Animatable.View
                    animation={'fadeInRight'}
                    duration={2000}
                >
                    <View style={Styles._imageContainer}>
                        {
                            imgUri ? (
                                <>
                                    <Image 
                                        source={IMAGES.loginBg}
                                        //source={{ uri:imgUri }}
                                        style={Styles._image}
                                    />
                                    <View style={Styles._imageIconView}>
                                        <Icon 
                                            onPress={_toggleViewImageModal}
                                            name='eye' 
                                            size={SCREEN_ICON_SIZE} 
                                            color={COLORS.whiteColor} 
                                        />
                                        <Icon 
                                            onPress={_onRemoveImageClick}
                                            name='trash' 
                                            size={SCREEN_ICON_SIZE} 
                                            color={COLORS.whiteColor} 
                                        />
                                    </View>
                                </>
                            ):(
                                <>
                                    <Icon onPress={_toggleImagePickerModal} name='upload' size={SCREEN_ICON_SIZE * 3} color={COLORS.greyColor} />
                                    <Text style={{ fontFamily: FONT, fontSize: FONT_SIZES.info1, color: COLORS.greyColor }}>Upload Image</Text>
                                </>
                            )
                        }
                    </View>
                    
                    <LabelInput 
                        label='Name'
                        placeholder='Name'
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <LabelInput 
                            containerWidth='45%'
                            label='Quantity'
                            placeholder='Quantity'
                        />
                        <LabelInput 
                            containerWidth='45%'
                            label='PPU'
                            placeholder='PPU'
                            isNumber={true}
                        />
                    </View>
                    <Text style={Styles._label}>Cuisine Type</Text>
                    <Dropdown 
                        useNativeDriver={false}
                        label='Cuisine Type'
                        data={CUISINES_TYPES}
                        value={CUISINES_TYPES[0].value}
                        labelTextStyle={{
                            fontFamily: FONT,
                            color: COLORS.greyColor
                        }}
                        itemTextStyle={{
                            fontFamily: FONT,
                            fontSize: FONT_SIZES.info1,
                            color: COLORS.secondaryColor
                        }}
                        selectedItemColor={COLORS.primaryColor}
                        containerStyle={{
                            backgroundColor: COLORS.whiteColor,
                            shadowColor: COLORS.secondaryColor,
                            shadowOffset: {width: 3, height: 3},
                            shadowOpacity: 0.2,
                            shadowRadius: RADIUS,
                            elevation: 5,
                            borderRadius: RADIUS,
                            paddingHorizontal: SPACING,
                        }}
                    />
                    <Text style={Styles._label}>Branch</Text>
                    <Dropdown 
                        useNativeDriver={false}
                        label='Branch'
                        data={BRANCHES}
                        value={BRANCHES[0].value}
                        labelTextStyle={{
                            fontFamily: FONT,
                            color: COLORS.greyColor
                        }}
                        itemTextStyle={{
                            fontFamily: FONT,
                            fontSize: FONT_SIZES.info1,
                            color: COLORS.secondaryColor
                        }}
                        selectedItemColor={COLORS.primaryColor}
                        containerStyle={{
                            backgroundColor: COLORS.whiteColor,
                            shadowColor: COLORS.secondaryColor,
                            shadowOffset: {width: 3, height: 3},
                            shadowOpacity: 0.2,
                            shadowRadius: RADIUS,
                            elevation: 5,
                            borderRadius: RADIUS,
                            paddingHorizontal: SPACING,
                        }}
                    />

                    <Button 
                        onPress={_showAddAlert}
                        title='save'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                        style={{ marginTop: SPACING * 2 }}
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
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150,
    },
    _imageContainer:{
        width: '100%',
        height: MOBILE_WIDTH * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RADIUS,
        borderColor: COLORS.primaryColor,
        borderWidth: 1,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        marginBottom: SPACING,
    },
    _image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: RADIUS,
    },
    _imageIconView:{
        width: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: SPACING * 1.5,
        right: SPACING * 1.5,
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor,
        marginBottom: SPACING / 2,
        marginTop: SPACING
    }
});

export default Add;