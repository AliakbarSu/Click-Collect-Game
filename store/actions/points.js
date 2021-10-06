import { UPDATE_PROFILE, dummyProfileData } from "./profile";





export const SendPoints = (username, points) => {
    return (dispatch, getState) => {
        // make api call
        dispatch({
            type: UPDATE_PROFILE,
            payload: dummyProfileData
        })
    }
}
