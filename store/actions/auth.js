import { StoreAuthData, GetAuthData, ClearAuthData } from "../../services/auth"
// import startApp from "../../../screens/MainTabs/startMainTabs";
import { API, LoginURL } from "../../utils/api"
import axios from '../../services/axios'
import * as navigation from '../../navigation/rootNavigation'

export const STORE_AUTH_DATA = 'STORE_AUTH_DATA'
export const REMOVE_AUTH_DATA = 'REMOVE_AUTH_DATA'
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL'
export const SET_AUTH = 'SET_AUTH'
export const SET_AUTH_CREDENTIALS = 'SET_AUTH_CREDENTIALS'
export const CLEAR_AUTH_CREDENTIALS = 'CLEAR_AUTH_CREDENTIALS'


export const setAuth = () => {
    return {type: SET_AUTH}
}

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL }
}

export const SignIn = (authData) => {
    return async dispatch => {
        const params = {
            username: authData.username,
            password: authData.password
        }
        const {data} = await axios.post("/signin", params)
        if(data.token) {
            dispatch(authSetToken({token: data.token, expiresIn: "3600", id: data.user}))
            dispatch({type: CLEAR_AUTH_CREDENTIALS})
        }
    }
}

export const SignUp = authData => {
    return async dispatch => {
        dispatch({type: SET_AUTH_CREDENTIALS, payload: authData})
        await axios.post("/signup", authData)
    }
}

export const Logout = () => {
    return dispatch => {
        ClearAuthData().then(() => dispatch({type: REMOVE_AUTH_DATA}))
    }
}


export const verifyEmail = (verificationCode) => {
    return (dispatch, getStore) => {
        const state = getStore()
        const data = {
            username: state.auth.authCredentials.username,
            verificationCode
        }
        axios.post("/verify-user-email", data).then(() => {
            dispatch(SignIn(state.auth.authCredentials))
        })
    }
}



export const authSetToken = (authData) => {
    return dispatch => {
        StoreAuthData(authData)
        dispatch({type: STORE_AUTH_DATA, payload: authData})
    }
}

export const authGetToken = () => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const token = getState().auth.token
            if(!token) {
                GetAuthData()
                .catch(err => reject())
                .then(tokenFromStorage => {
                    if(!tokenFromStorage.every(value => value !== null)) {
                        reject()
                        return;
                    }
                    const tokenFromST = {
                        token: tokenFromStorage[0], 
                        expiresIn: tokenFromStorage[1],
                        id: tokenFromStorage[2]
                    }
                    dispatch(authSetToken(tokenFromST))
                    resolve(tokenFromST)
                })
            }else {
                resolve(getState().auth)
            }
        })
    }
}

export const autoLogin = () => {
    return dispatch => {
        dispatch(authGetToken())
        .then(token => {
            // startApp()
        })
        .catch(err => console.log('Login Failed!'))
    }
}

