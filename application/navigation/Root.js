import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

//Screens
import {
    Splash,
    Welcome,
    Login,
    Signup,
    ForgetPassword,
} from '../screens';
import Customer from './Customer';
import Restaurant from './Restaurant';
import Guest from './Guest';

import { COLORS, SPACING } from '../config/config';

const RootStack = createStackNavigator();

const Root = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='splash'
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTintColor: COLORS.primaryColor,
                    headerTitle: '',
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
                    headerLeftContainerStyle:{
                        marginLeft: SPACING
                    },
                    cardStyle:{
                        backgroundColor: COLORS.whiteColor
                    }
                }}
            >
                <RootStack.Screen 
                    name='splash'
                    component={Splash}
                    options={{
                        headerShown:false,
                    }}
                />
                <RootStack.Screen 
                    name='welcome'
                    component={Welcome}
                    options={{
                        headerShown:false,
                    }}
                />
                <RootStack.Screen 
                    name='login'
                    component={Login}
                />
                <RootStack.Screen 
                    name='signup'
                    component={Signup}
                />
                <RootStack.Screen 
                    name='forgetpassword'
                    component={ForgetPassword}
                />
                <RootStack.Screen 
                    name='customer'
                    component={Customer}
                    options={{
                        headerShown:false,
                    }}
                />
                <RootStack.Screen 
                    name='restaurant'
                    component={Restaurant}
                    options={{
                        headerShown:false,
                    }}
                />
                <RootStack.Screen 
                    name='guest'
                    component={Guest}
                    options={{
                        headerShown:false,
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Root;