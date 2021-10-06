import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { GetAuthData, ClearAuthData } from '../../services/auth'
import { connect, useDispatch, useSelector } from 'react-redux'
import { authSetToken, setDidTryAL } from '../../store/actions/auth'

const AuthLoadingScreen = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    const tryLogin = async () => {
      const authData = await GetAuthData().catch(err => {
        dispatch(setDidTryAL())
        return
      })
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
      if(authData[0] && authData[1]) {
        dispatch(authSetToken({token: authData[0], expiresIn: authData[1], id: authData[2]}))
        return
          // const removedData = await ClearAuthData()
      }
      dispatch(setDidTryAL())
      
    }

    tryLogin()
    
  }, [dispatch])
 
  // Render any loading content that you like here
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapActionsToProps = dispatch => {
    return {
        setAuth: (authData) => dispatch(authSetToken(authData))
    }
}

export default AuthLoadingScreen