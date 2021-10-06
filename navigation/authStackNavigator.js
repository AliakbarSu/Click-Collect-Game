import React from 'react'
import LoginScreen from '../screens/auth/login.screen'
import VerifyEmailScreen from '../screens/auth/verifyEmail.screen'
import { ModalStackNavigator } from './modalStackNavigator'
import { createStackNavigator } from '@react-navigation/stack'




const Stack = createStackNavigator()


export const AuthStackNavigator = props => {
    return <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen}/>
    </Stack.Navigator>
} 

// export const AuthStackNavigator = createStackNavigator({
//     Login: LoginScreen,
//     ...ModalStackNavigator
// })
