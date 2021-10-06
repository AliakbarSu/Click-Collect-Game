import { UPDATE_PROFILE, UPDATE_AVATAR } from "../actions/profile";

const initialState = {
    id: null,
    firstName: '',
    lastName: '',
    username: '',
    email: null,
    avatar: {uri: ''},
    status: null,
    points: null,
    win: null,
    lost: null,
    level: null,
    onlineTime: null
}

const ProfileReducer = (state = initialState, action ) => {
    switch(action.type) {
        case UPDATE_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_AVATAR: 
            return {
                ...state,
                avatar: action.payload
            }
        default: 
            return state;
    }
}

export default ProfileReducer;