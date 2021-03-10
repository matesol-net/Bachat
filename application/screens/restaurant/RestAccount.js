import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import { COLORS, SPACING } from '../../config/config';
import { AppBar, Button, LabelInput, UpdatePasswordModal } from '../../components';
import { _gotoSplash } from '../../navigation/service';

const RestAccount = ({navigation}) => {

    const [viewPassModal, setViewPassModal] = useState(false);

    //Toggle Password Modal
    const _togglePasswordModal = () => {
        if(viewPassModal)
            setViewPassModal(false);
        else
            setViewPassModal(true);
    }

    //On Update Password submit click
    const _onPasswordUpdate = () => {
        alert('In Progress');
    }

    return(
        <View style={Styles._mainContainer}>
            
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />

            {/* Update Passowrd Modal */}
            <UpdatePasswordModal 
                onSubmitClick={()=>{ _onPasswordUpdate() }}
                onCloseClick={()=>{ _togglePasswordModal() }}
                isVisible={viewPassModal}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <LabelInput 
                    label='Restaurant Name'
                    placeholder='Restaurant Name'
                />
                <LabelInput 
                    label='Mobile'
                    placeholder='Mobile'
                    isNumber={true}
                />
                <LabelInput 
                    label='Email'
                    placeholder='Email'
                    editable={false}
                />
                <Button 
                    onPress={()=>{ _togglePasswordModal() }}
                    title='Update Password'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                    style={{ marginTop: SPACING * 2 }}
                />
                <Button 
                    title='Update Profile'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.primaryColor}
                    style={{ marginTop: SPACING / 2 }}
                />
                <Button 
                    onPress={()=>{ _gotoSplash(navigation) }}
                    title='Logout'
                    titleColor={COLORS.whiteColor}
                    backgroundColor={COLORS.redColor}
                    style={{ marginTop: SPACING / 2 }}
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
        padding: SPACING * 2,
    },
});

export default RestAccount;