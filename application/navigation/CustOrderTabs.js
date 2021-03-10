import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import {
    CustPendingOrders,
    CustCompletedOrders,
    CustCancelledOrders
} from '../screens';
import { COLORS, FONT, FONT_SIZES } from '../config/config';

const Tabs = createMaterialTopTabNavigator();

const CustOrderTabs = () => {
    return(
        <Tabs.Navigator
            initialRouteName='custpendingorders'
            sceneContainerStyle={{
                backgroundColor: COLORS.whiteColor,
            }}
            tabBarOptions={{
                indicatorStyle:{
                    backgroundColor: COLORS.primaryColor
                },
                labelStyle:{
                    fontFamily: FONT,
                    fontSize: FONT_SIZES.info2
                },
            }}
        >
            <Tabs.Screen
                name='custpendingorders'
                component={CustPendingOrders}
                options={{
                    tabBarLabel:'Pending'
                }}
            />
            <Tabs.Screen
                name='custcompletedorders'
                component={CustCompletedOrders}
                options={{
                    tabBarLabel:'Completed'
                }}
            />
            <Tabs.Screen
                name='custcancelledorders'
                component={CustCancelledOrders}
                options={{
                    tabBarLabel:'Cancelled'
                }}
            />
        </Tabs.Navigator>
    );
}

export default CustOrderTabs;