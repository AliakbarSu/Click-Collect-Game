import { STORE_AUTH_DATA, REMOVE_AUTH_DATA, SET_DID_TRY_AL, SET_AUTH, SET_AUTH_CREDENTIALS, CLEAR_AUTH_CREDENTIALS } from "../actions/auth";

const initialState = {
    lastLoggedIn: null,
    token: '',
    expiresIn: '',
    id: '',
    didTryAutoAL: false,
    authCredentials: {}
}

const AuthReducer = (state = initialState, action ) => {
    switch(action.type) {
        case STORE_AUTH_DATA:
            return {
                ...state,
                lastLoggedIn: new Date().getTime(),
                token: action.payload.token,
                expiresIn: action.payload.expiresIn,
                id: action.payload.id,
                didTryAutoAL: true
            }

        case REMOVE_AUTH_DATA:
            return {
                ...state,
                lastLoggedIn: null,
                token: '',
                expiresIn: '',
                id: '',
                didTryAutoAL: true
            }
        case SET_DID_TRY_AL:
            return {
                ...state,
                didTryAutoAL: true
            }
        case SET_AUTH_CREDENTIALS:
            return {
                ...state,
                authCredentials: action.payload
            }
        case CLEAR_AUTH_CREDENTIALS:
            return {
                ...state,
                authCredentials: {}
            }
        default: 
            return state;
    }
}

export default AuthReducer;