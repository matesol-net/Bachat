import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import Modal from 'react-native-modal';
import { Button } from '.';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_HEIGHT, MOBILE_WIDTH, RADIUS, SPACING } from '../config/config';

const ImagePickerModal = ({isVisible, closeBtn, OnGalleryClick, onCameraClick}) => {
    return(
        <Modal
            swipeDirection={'down'}
            onBackButtonPress={closeBtn}
            onBackdropPress={closeBtn}
            style={{ margin: 0 }}
            isVisible={isVisible}
            animationIn={'slideInUp'}
            animationInTiming={1000}
            animationOut={'slideOutDown'}
            animationOutTiming={1000}
        >
            <View style={Styles._mainContainer}>
                <View style={Styles._optionView}>
                    <TouchableOpacity 
                        onPress={onCameraClick}
                        style={Styles._box}
                    >
                        <Image 
                            source={IMAGES.cameraIcon}
                            style={Styles._icon}
                        />
                        <Text style={Styles._option}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={OnGalleryClick}
                        style={[Styles._box,{ marginLeft: SPACING * 3 }]}
                    >
                        <Image 
                            source={IMAGES.galleryIcon}
                            style={Styles._icon}
                        />
                        <Text style={Styles._option}>Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        width: MOBILE_WIDTH,
        height: MOBILE_HEIGHT * 0.22,
        padding: SPACING * 2,
        backgroundColor: COLORS.secondaryColor,
        borderTopLeftRadius: RADIUS,
        borderTopRightRadius: RADIUS,
        position: 'absolute',
        bottom: 0,
    },
    _optionView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    _box:{
        alignItems: 'center',
    },
    _icon:{
        width: (MOBILE_HEIGHT * 0.22) * 0.3,
        height: (MOBILE_HEIGHT * 0.22) * 0.3,
        borderRadius: ((MOBILE_HEIGHT * 0.22) * 0.3)/2,
        resizeMode: 'cover',
        marginBottom: SPACING / 2,
    },
    _option:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.whiteColor
    },
});

export default ImagePickerModal;