import { UPDATE_PROFILE } from "./profile";






export const Redeem = (pointsToRedeem) => {
    return (dispatch, getState) => {
        // make api call
        const prevPoints = getState().profile.points;
        dispatch({
            type: UPDATE_PROFILE,
            payload: {
                points: prevPoints - pointsToRedeem
            }
        })
    }
}