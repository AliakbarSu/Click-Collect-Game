export const ADD_USER_DATA = 'ADD_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';


export const StoreUserData = (userData) => {
    return {
        type: ADD_USER_DATA,
        payload: userData
    }
}

export const ClearUserData = () => {
    return {
        type: CLEAR_USER_DATA
    }
}