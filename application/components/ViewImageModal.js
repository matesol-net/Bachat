import React from 'react';
import {
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Modal from 'react-native-modal';
import { MOBILE_WIDTH } from '../config/config';

const ViewImageModal = ({isVisible, image, onPress}) => {
    return(
        <Modal
            onBackButtonPress={onPress}
            onBackdropPress={onPress}
            isVisible={isVisible}
            style={{ margin: 0 }}
        >
            <TouchableOpacity
                onPress={onPress}
                style={Styles._mainContainer}
            >
                <Image 
                    source={image}
                    style={Styles._image}
                />
            </TouchableOpacity>
        </Modal>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _image:{
        width: MOBILE_WIDTH,
        height: MOBILE_WIDTH,
        resizeMode: 'contain',
    },
});

export default ViewImageModal;