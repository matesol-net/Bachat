import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { COLORS, HEADER_ICON_SIZE } from '../config/config';

const NavButton = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={()=>{ navigation.openDrawer(); }}
        >
            <Icon name='menu' size={HEADER_ICON_SIZE} color={COLORS.whiteColor} />
        </TouchableOpacity>
    );
}

export default NavButton;