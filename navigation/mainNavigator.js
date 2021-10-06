import React from 'react'
import AuthLoading from '../screens/auth/loading.screen';
import { AuthStackNavigator } from './authStackNavigator';
import { DrawerNavigator } from './drawerNavigator'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'




export default props => {
  const isAuth = useSelector(state => !!state.auth.token)
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoAL)
  return (
  <NavigationContainer>
    {/* <ModalNavigator/> */}
    {isAuth && <DrawerNavigator/>}
    {!isAuth && didTryAutoLogin && <AuthStackNavigator/>}
    {!isAuth && !didTryAutoLogin && <AuthLoading />}
  </NavigationContainer>)
}
