export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_AVATAR = 'UPDATE_AVATAR';




export const FetchProfile = () => {
    return dispatch => {
        // make api call
       setTimeout(() => {
            dispatch({
                type: UPDATE_PROFILE,
                payload: dummyProfileData
            })
       }, 100)
    }
}

export const UpdateAvatar = (image) => {
    return dispatch => {
        // make api call
        dispatch({
            type: UPDATE_AVATAR,
            payload: image
        })
    }
}

export const dummyProfileData = {
    id: '4242411',
    firstName: 'Ali',
    lastName: 'Sultani',
    username: '@12alisultani',
    email: 'test123@example.com',
    avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931309/restaurant/backgrounds/joseph-gonzalez-176749-unsplash.jpg"},
    status: 'OFFLINE',
    online: 1,
    points: 22,
    win: 2,
    lost: 3,
    level: 2
}

