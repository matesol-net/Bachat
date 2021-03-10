import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import {
    RestPendingOrders,
    RestCompletedOrders,
    RestCancelledOrders
} from '../screens';
import { COLORS, FONT, FONT_SIZES } from '../config/config';

const Tabs = createMaterialTopTabNavigator();

const RestOrderTabs = () => {
    return(
        <Tabs.Navigator
            initialRouteName='restpendingorders'
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
                name='restpendingorders'
                component={RestPendingOrders}
                options={{
                    tabBarLabel:'Pending'
                }}
            />
            <Tabs.Screen
                name='restcompletedorders'
                component={RestCompletedOrders}
                options={{
                    tabBarLabel:'Completed'
                }}
            />
            <Tabs.Screen
                name='restcancelledorders'
                component={RestCancelledOrders}
                options={{
                    tabBarLabel:'Cancelled'
                }}
            />
        </Tabs.Navigator>
    );
}

export default RestOrderTabs;