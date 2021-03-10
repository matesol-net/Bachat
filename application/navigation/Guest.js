import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONT, FONT_SIZES, IMAGES, MOBILE_HEIGHT, PLATFORM, SPACING } from '../config/config';

//Screens
import {
    AboutUs,
    ContactUs,
    FAQ,
    FollowUs,
    Home,
    Details,
    RestDetails
} from '../screens';
import { NavButton } from '../components';
import { _openLink } from '../utils/linking';
import { _shareApplication } from '../utils/share';
import { _gotoSplash } from './service';

//Wrapping Drawer Screens in Stack for custom header
const HomeStack = createStackNavigator();
const HomeScreen = () => {
    return(
        <HomeStack.Navigator
            initialRouteName='guesthome'
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
                name='guesthome'
                component={Home}
                options={{
                    headerTitle: 'Home',
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
                    headerTransparent: true
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
const AboutUsStack = createStackNavigator();
const AboutUsScreen = () => {
    return(
        <AboutUsStack.Navigator
            initialRouteName='aboutus'
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
            <AboutUsStack.Screen 
                name='aboutus'
                component={AboutUs}
                options={{
                    headerTitle: 'About Us',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </AboutUsStack.Navigator>
    );
}
const ContactUsStack = createStackNavigator();
const ContactUsScreen = () => {
    return(
        <ContactUsStack.Navigator
            initialRouteName='contactus'
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
            <AboutUsStack.Screen 
                name='contactus'
                component={ContactUs}
                options={{
                    headerTitle: 'Contact Us',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </ContactUsStack.Navigator>
    );
}
const FollowUsStack = createStackNavigator();
const FollowUsScreen = () => {
    return(
        <FollowUsStack.Navigator
            initialRouteName='followus'
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
            <FollowUsStack.Screen 
                name='followus'
                component={FollowUs}
                options={{
                    headerTitle: 'Follow Us',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </FollowUsStack.Navigator>
    );
}
const FAQStack = createStackNavigator();
const FAQScreen = () => {
    return(
        <FAQStack.Navigator
            initialRouteName='faq'
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
            <FAQStack.Screen 
                name='faq'
                component={FAQ}
                options={{
                    headerTitle: 'FAQ',
                    headerLeft:()=>(
                        <NavButton />
                    )
                }}
            />
        </FAQStack.Navigator>
    );
}

const GuestDrawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    return (
        <View style={Styles._mainDrawerView}>
            <View style={Styles._drawerHeaderView}>
                <Image source={IMAGES.logo} style={Styles._logo} />
            </View>
            <DrawerContentScrollView bounces={false} {...props}>
                <DrawerItemList {...props} />
                <DrawerItem 
                    onPress={()=>{ _openLink('https://sites.google.com/view/bachat-privacy-policy') }}
                    label='Privacy Policy'
                    labelStyle={Styles._label}
                    icon={({color, size})=>(
                        <Icon name='shield' size={size} color={COLORS.secondaryColor} />
                    )}
                />
                <DrawerItem 
                    onPress={()=>{ _openLink('https://sites.google.com/view/bachat-terms-conditions') }}
                    label="Terms & Condition"
                    labelStyle={Styles._label}
                    icon={({color, size})=>(
                        <Icon name='file-text' size={size} color={COLORS.secondaryColor} />
                    )}
                />
                <DrawerItem 
                    onPress={()=>{ _openLink('https://play.google.com/store/apps/details?id=com.spl.bachat') }}
                    label="Rate Us"
                    labelStyle={Styles._label}
                    icon={({color, size})=>(
                        <Icon name='star' size={size} color={COLORS.secondaryColor} />
                    )}
                />
                <DrawerItem 
                    onPress={()=>{ _shareApplication({ message: 'Adipisicing amet eu in do aute et quis minim deserunt in est.', url:'https://play.google.com/store/apps/details?id=com.spl.bachat' }) }}
                    label="Share With Friend"
                    labelStyle={Styles._label}
                    icon={({color, size})=>(
                        <Icon name='share-alt' size={size} color={COLORS.secondaryColor} />
                    )}
                />
                <View style={Styles._loginBtnView}>
                    <Text onPress={()=>{ _gotoSplash(props.navigation) }} style={Styles._loginText}>Click here to do Login or Signup</Text>
                </View>
                <View style={Styles._versionView}>
                    <Text style={[Styles._version,{ marginTop: SPACING }]}>Application Version</Text>
                    <Text style={Styles._version}>1.0</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const Guest = () => {
    return(
        <GuestDrawer.Navigator
            drawerContent={CustomDrawerContent}
            initialRouteName='guesthome'
            drawerContentOptions={{
                activeTintColor: COLORS.primaryColor,
                activeBackgroundColor: 'rgba(255,179,0,0.1)',
                inactiveTintColor: COLORS.secondaryColor,
                inactiveBackgroundColor: COLORS.whiteColor,
                labelStyle:{
                    fontFamily: FONT,
                    fontSize: FONT_SIZES.info2,
                    marginLeft: -20,
                }
            }}
        >
            <GuestDrawer.Screen 
                name='guesthome'
                component={HomeScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon:({color, size})=>(
                        <Icon name='home' color={color} size={size} />
                    )
                }}
            />
            <GuestDrawer.Screen 
                name='aboutus'
                component={AboutUsScreen}
                options={{
                    drawerLabel: 'About Us',
                    drawerIcon:({color, size})=>(
                        <Icon name='group' color={color} size={size} />
                    )
                }}
            />
            <GuestDrawer.Screen 
                name='contactus'
                component={ContactUsScreen}
                options={{
                    drawerLabel: 'Contact Us',
                    drawerIcon:({color, size})=>(
                        <MatIcon name='support-agent' color={color} size={size} />
                    )
                }}
            />
            <GuestDrawer.Screen 
                name='followus'
                component={FollowUsScreen}
                options={{
                    drawerLabel: 'Follow Us',
                    drawerIcon:({color, size})=>(
                        <MatIcon name='follow-the-signs' color={color} size={size} />
                    )
                }}
            />
            <GuestDrawer.Screen 
                name='FAQ'
                component={FAQScreen}
                options={{
                    drawerLabel: 'FAQ',
                    drawerIcon:({color, size})=>(
                        <Icon name='question-circle' color={color} size={size} />
                    )
                }}
            />
        </GuestDrawer.Navigator>
    );
}

const Styles = StyleSheet.create({
    _mainDrawerView:{
        flex: 1,
    },
    _drawerHeaderView:{
        width: '100%',
        height: MOBILE_HEIGHT * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryColor,
        marginBottom: PLATFORM === 'ios' ? -SPACING * 4:0,
    },
    _logo:{
        width: (MOBILE_HEIGHT * 0.25)/2,
        height: (MOBILE_HEIGHT * 0.25)/2,
        resizeMode: 'contain'
    },
    _label:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info2,
        color: COLORS.secondaryColor,
        marginLeft: -20,
    },
    _versionView:{
        paddingHorizontal: SPACING * 4,
        alignItems: 'center',
        marginTop: SPACING,
    },
    _version:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.greyColor,
        textAlign: 'center',
    },
    _loginBtnView:{
        paddingHorizontal: SPACING * 4,
        alignItems: 'center',
        marginTop: SPACING,
    },
    _loginText:{
        fontFamily: FONT,
        fontSize: FONT_SIZES.info1,
        fontWeight: 'bold',
        color: COLORS.primaryColor,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})

export default Guest;