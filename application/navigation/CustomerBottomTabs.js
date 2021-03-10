import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import {
    Home,
    CustAccount,
    Details,
    Book,
    Confirmation,
    CustOrderDetails,
    RestDetails,
} from '../screens';
import CustOrderTabs from './CustOrderTabs';
import { COLORS, FONT, FONT_SIZES, SPACING } from '../config/config';
import { NavButton } from '../components';

//Wrapping in Stack for custom Header
const HomeStack = createStackNavigator();
const HomeScreen = () => {
    return(
        <HomeStack.Navigator
            initialRouteName='home'
            screenOptions={{
                headerBackTitleVisible: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec:{
                    open: {animation: 'timing', config:{duration: 500}},
                    close: {animation: 'timing', config:{duration: 500}}
                },
                headerTitleStyle:{
                    fontFamily: FONT,
                },
                cardStyle:{
                    backgroundColor: COLORS.whiteColor
                },
                headerStyle:{
                    backgroundColor: COLORS.primaryColor
                },
                headerTintColor: COLORS.whiteColor,
                headerLeftContainerStyle:{
                    marginLeft: SPACING
                },
            }}
        >
            <HomeStack.Screen 
                name='home'
                component={Home}
                options={{
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
            <HomeStack.Screen 
                name='details'
                component={Details}
                options={{
                    headerTitle: '',
                    headerTintColor: COLORS.primaryColor,
                    headerTransparent: true,
                }}
            />
            <HomeStack.Screen 
                name='book'
                component={Book}
                options={{
                    headerTitle: '',
                    headerTintColor: COLORS.primaryColor,
                    headerTransparent: true,
                }}
            />
            <HomeStack.Screen 
                name='confirmation'
                component={Confirmation}
                options={{
                    headerTitle: '',
                    headerTintColor: COLORS.primaryColor,
                    headerTransparent: true,
                }}
            />
            <HomeStack.Screen 
                name='restDetails'
                component={RestDetails}
                options={{
                    headerTitle: 'Restaurant Details',
                }}
            />
        </HomeStack.Navigator>
    );
}
const OrderStack = createStackNavigator();
const OrderScreen = () => {
    return(
        <OrderStack.Navigator
            initialRouteName='custorders'
            screenOptions={{
                headerBackTitleVisible: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec:{
                    open: {animation: 'timing', config:{duration: 500}},
                    close: {animation: 'timing', config:{duration: 500}}
                },
                headerTitleStyle:{
                    fontFamily: FONT,
                },
                cardStyle:{
                    backgroundColor: COLORS.whiteColor
                },
                headerStyle:{
                    backgroundColor: COLORS.primaryColor
                },
                headerTintColor: COLORS.whiteColor,
                headerLeftContainerStyle:{
                    marginLeft: SPACING
                },
            }}
        >
            <OrderStack.Screen 
                name='custorders'
                component={CustOrderTabs}
                options={{
                    headerTitle: 'Orders',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
            <OrderStack.Screen 
                name='custOrderDetails'
                component={CustOrderDetails}
                options={{
                    headerTintColor: COLORS.primaryColor,
                    headerTitle: '',
                    headerTransparent: true
                }}
            />
        </OrderStack.Navigator>
    );
}
const AccountStack = createStackNavigator();
const AccountScreen = () => {
    return(
        <AccountStack.Navigator
            initialRouteName='custaccount'
            screenOptions={{
                headerBackTitleVisible: false,
                cardStyleInterpolator: ({current:{progress}})=>{
                    return{
                        cardStyle:{
                            opacity: progress
                        }
                    }
                },
                transitionSpec:{
                    open: {animation: 'timing', config:{duration: 500}},
                    close: {animation: 'timing', config:{duration: 500}}
                },
                headerTitleStyle:{
                    fontFamily: FONT,
                },
                cardStyle:{
                    backgroundColor: COLORS.whiteColor
                },
                headerStyle:{
                    backgroundColor: COLORS.primaryColor
                },
                headerTintColor: COLORS.whiteColor,
                headerLeftContainerStyle:{
                    marginLeft: SPACING
                },
            }}
        >
            <AccountStack.Screen 
                name='custaccount'
                component={CustAccount}
                options={{
                    headerTitle: 'Account',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </AccountStack.Navigator>
    );
}

// const tabs = {
//     homescreen: { // < Screen name
//         labelStyle: {
//             color: COLORS.primaryColor,
//         },
//         icon: {
//             component: () => (<Icon name='home' size={HEADER_ICON_SIZE} color={COLORS.primaryColor} />),
//             activeColor: COLORS.primaryColor,
//             inactiveColor: COLORS.lightGrey,
//         },
//         background: {
//             activeColor: 'rgba(255,179,0,0.1)',
//             inactiveColor: COLORS.whiteColor,
//         },
//     },
//     orderscreen: { // < Screen name
//         labelStyle: {
//             color: COLORS.primaryColor,
//         },
//         icon: {
//             component: () => (<Icon name='list' size={HEADER_ICON_SIZE} color={COLORS.primaryColor} />),
//             activeColor: COLORS.primaryColor,
//             inactiveColor: COLORS.lightGrey,
//         },
//         background: {
//             activeColor: 'rgba(255,179,0,0.1)',
//             inactiveColor: COLORS.whiteColor,
//         },
//     },
//     accountscreen: { // < Screen name
//         labelStyle: {
//             color: COLORS.primaryColor,
//         },
//         icon: {
//             component: () => (<Icon name='user' size={HEADER_ICON_SIZE} color={COLORS.primaryColor} />),
//             activeColor: COLORS.primaryColor,
//             inactiveColor: COLORS.lightGrey,
//         },
//         background: {
//             activeColor: 'rgba(255,179,0,0.1)',
//             inactiveColor: COLORS.whiteColor,
//         },
//     },
// };

const BottomTabs = createBottomTabNavigator();

const CustomerBottomTabs = () => {
    return(
        <BottomTabs.Navigator
            tabBarOptions={{
                activeTintColor: COLORS.primaryColor,
                inactiveTintColor: COLORS.greyColor,
                labelStyle:{
                    fontFamily: FONT,
                    fontSize: FONT_SIZES.info2,
                },
            }}
            // tabBar={props => (
            //     <AnimatedTabBar 
            //         tabs={tabs} 
            //         {...props}
            //         style={{ borderTopColor: COLORS.lightGrey, borderTopWidth: 1, }} 
            //     />
            // )}
        >
            <BottomTabs.Screen 
                name='homescreen'
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon:({color, size})=>(
                        <Icon name='home' size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='orderscreen'
                component={OrderScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon:({color, size})=>(
                        <Icon name='list' size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='accountscreen'
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon:({color, size})=>(
                        <Icon name='user' size={size} color={color} />
                    )
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default CustomerBottomTabs;

