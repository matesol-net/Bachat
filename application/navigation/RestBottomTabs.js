import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import {
    Dashboard,
    Listing,
    Add,
    RestAccount,
    RestOrderDetails,
    EditItem,
} from '../screens';
import RestOrderTabs from './RestOrderTabs';
import { COLORS, FONT, FONT_SIZES, HEADER_ICON_SIZE, MOBILE_WIDTH, RADIUS, SPACING } from '../config/config';
import { NavButton } from '../components';

//Wrapping in Stack for custom Header
const DashboardStack = createStackNavigator();
const DashboardScreen = () => {
    return(
        <DashboardStack.Navigator
            initialRouteName='dashboard'
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
            <DashboardStack.Screen 
                name='dashboard'
                component={Dashboard}
                options={{
                    headerTitleAlign: 'left',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </DashboardStack.Navigator>
    );
}
const ListingStack = createStackNavigator();
const ListingScreen = () => {
    return(
        <ListingStack.Navigator
            initialRouteName='listings'
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
            <ListingStack.Screen 
                name='listings'
                component={Listing}
                options={{
                    headerTitle: 'Listings',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
            <ListingStack.Screen 
                name='edititem'
                component={EditItem}
                options={{
                    headerTitle: 'Edit Item',
                }}
            />
        </ListingStack.Navigator>
    );
}
const AddStack = createStackNavigator();
const AddScreen = () => {
    return(
        <AddStack.Navigator
            initialRouteName='add'
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
            <AddStack.Screen 
                name='add'
                component={Add}
                options={{
                    headerTitle: 'Add Item',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </AddStack.Navigator>
    );
}
const RestOrderStack = createStackNavigator();
const RestOrderScreen = () => {
    return(
        <RestOrderStack.Navigator
            initialRouteName='restorders'
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
            <RestOrderStack.Screen 
                name='restorders'
                component={RestOrderTabs}
                options={{
                    headerTitle: 'Orders',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
            <RestOrderStack.Screen 
                name='restorderdetails'
                component={RestOrderDetails}
                options={{
                    headerTitle: '',
                    headerTransparent: true
                }}
            />
        </RestOrderStack.Navigator>
    );
}
const RestAccountStack = createStackNavigator();
const RestAccountcreen = () => {
    return(
        <RestAccountStack.Navigator
            initialRouteName='restaccount'
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
            <RestAccountStack.Screen 
                name='restaccount'
                component={RestAccount}
                options={{
                    headerTitle: 'Account',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </RestAccountStack.Navigator>
    );
}

const CustomButton = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            onPress={()=>{ 
                navigation.navigate('addscreen');
            }}
            style={{
                width: MOBILE_WIDTH * 0.15,
                height: MOBILE_WIDTH * 0.15,
                borderRadius: (MOBILE_WIDTH * 0.15)/2,
                backgroundColor: COLORS.whiteColor,
                marginTop: -30,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: COLORS.secondaryColor,
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.2,
                shadowRadius: RADIUS,
                elevation: 10,
            }}
        >
            <Icon name='plus' size={HEADER_ICON_SIZE} color={COLORS.primaryColor} />
        </TouchableOpacity>
    );
}

const BottomTabs = createBottomTabNavigator();

const RestBottomTabs = () => {
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
        >
            <BottomTabs.Screen 
                name='dashboardscreen'
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon:({color, size})=>(
                        <Icon name='home' size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='listingscreen'
                component={ListingScreen}
                options={{
                    tabBarLabel: 'Listings',
                    tabBarIcon:({color, size})=>(
                        <Icon name='list' size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='addscreen'
                component={AddScreen}
                options={{
                    tabBarButton:()=>(
                        <CustomButton />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='restorderscreen'
                component={RestOrderScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon:({color, size})=>(
                        <Icon name='list' size={size} color={color} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name='restaccountscreen'
                component={RestAccountcreen}
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

export default RestBottomTabs;

