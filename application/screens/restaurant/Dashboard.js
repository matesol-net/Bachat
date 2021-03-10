import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import {
    BarChart,
} from "react-native-chart-kit";
import Modal from 'react-native-modal';
import { AppBar, Button, LabelInput } from '../../components';
import { MOBILE_WIDTH, COLORS, FONT, FONT_SIZES, RADIUS, SPACING } from '../../config/config';

const Dashboard = ({ navigation }) => {

    const [filterModal, setFilterModal] = useState(false);

    const data = {
        labels: ["Revenues", "Sales"],
        datasets: [
            {
                data: [3242, 2322],
                colors: [
                    (opacity = 1) => COLORS.greenColor,
                    (opacity = 1) => COLORS.primaryColor,
                ]
            }
        ]
    };

    //toggle filter modal
    const _toggleFilterModal = () => {
        if(filterModal)
            setFilterModal(false);
        else
            setFilterModal(true);
    }

    //Effect for setting header title
    useEffect(()=>{
        navigation.setOptions({
            headerTitle:()=>(
                <View style={Styles._topBarNameView}>
                    <Text style={Styles._welcome}>Welcome,</Text>
                    <Text style={Styles._restName}>Baba Tikka</Text>
                </View>
            )
        })
    },[]);
    
    return(
        <View style={Styles._mainContainer}>
            <AppBar 
                barStyle='light'
                backgroundColor={COLORS.primaryColor}
            />

            {/* Date Filter Modal */}
            <Modal
                onBackButtonPress={_toggleFilterModal}
                onBackdropPress={_toggleFilterModal}
                isVisible={filterModal}
            >
                <View style={Styles._modalMainView}>
                    <View style={Styles._modalHeaderView}>
                        <Text style={Styles._modalHeading}>Select Date</Text>
                    </View>
                    <View style={Styles._dateView}>
                        <LabelInput 
                            containerWidth='45%'
                            label='From'
                            placeholder='dd-mm-yyyy'
                        />
                        <LabelInput 
                            containerWidth='45%'
                            label='To'
                            placeholder='dd-mm-yyyy'
                        />
                    </View>
                    <Button
                        onPress={_toggleFilterModal}
                        title='Apply'
                        titleColor={COLORS.whiteColor}
                        backgroundColor={COLORS.primaryColor}
                    />
                    <Button
                        onPress={_toggleFilterModal}
                        title='Close'
                        titleColor={COLORS.greyColor}
                    />
                </View>
            </Modal>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles._scrollContainer}
            >
                <View style={Styles._chartMainView}>
                    <View style={Styles._chartHeaderView}>
                        <Text style={Styles._chartHeading}>Statistics</Text>
                        <Text onPress={_toggleFilterModal} style={Styles._date}>As of today</Text>
                    </View>
                    <View style={Styles._chartSection}>
                        <View style={Styles._row}>
                            <Text style={Styles._label}>Revenues</Text>
                            <Text style={Styles._value}>Rs. 3242</Text>
                        </View>
                        <View style={Styles._row}>
                            <Text style={Styles._label}>Sales</Text>
                            <Text style={Styles._value}>Rs. 2322</Text>
                        </View>
                        <BarChart
                            style={Styles._graph}
                            fromZero
                            data={data}
                            width={MOBILE_WIDTH * 0.7}
                            height={MOBILE_WIDTH * 0.7}
                            yAxisLabel=""
                            yAxisInterval={100}
                            withCustomBarColorFromData={true}
                            flatColor={true}
                            chartConfig={{
                                backgroundColor: COLORS.whiteColor,
                                backgroundGradientFrom: COLORS.whiteColor,
                                backgroundGradientTo: COLORS.whiteColor,
                                color: (opacity = 1) => COLORS.whiteColor,
                                labelColor: () => COLORS.greyColor,
                            }}
                        />
                    </View>
                </View>
            
            </ScrollView>

        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
    },
    _welcome:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.whiteColor
    },
    _restName:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        color: COLORS.whiteColor
    },
    _scrollContainer:{
        padding: SPACING * 2,
        paddingBottom: 150,
    },
    _chartMainView:{
        width: '100%',
        borderRadius: RADIUS,
        backgroundColor: COLORS.whiteColor,
        shadowColor: COLORS.secondaryColor,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: RADIUS,
        elevation: 5,
    },
    _chartHeaderView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.secondaryColor,
        padding: SPACING,
        borderRadius: RADIUS,
    },
    _chartHeading: {
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.whiteColor,
    },
    _date:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.lightGrey,
    },
    _chartSection:{
        padding: SPACING,
    },
    _graph:{
        marginTop: SPACING * 2,
        alignSelf: 'center',
    },
    _row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING / 2,
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _value:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        color: COLORS.secondaryColor
    },
    _modalMainView:{
        backgroundColor: COLORS.whiteColor,
        borderRadius: RADIUS,
        padding: SPACING,
    },
    _modalHeaderView:{
        paddingBottom: SPACING,
        alignItems: 'center',
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        marginBottom: SPACING * 2
    },
    _modalHeading:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.h6,
        fontWeight: 'bold',
        color: COLORS.secondaryColor
    },
    _dateView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING * 2,
    }
});

export default Dashboard;