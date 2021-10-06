const initialState = {
    name: '',
    avatar: '',
    email: '',
    gameStatus: {
        leaderboardStatus: 0,
        wins: 0,
        lost: 0,
        played: 0
    },
    location: {
        lat: null,
        long: null
    }
}

const UserReducer = (state = initialState, action ) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default UserReducer;