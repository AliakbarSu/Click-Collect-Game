import { UPDATE_PROFILE } from "./profile";
import axios from '../../services/axios'

export const UPDATE_LEADER_BOARD = 'UPDATE_LEADER_BOARD';
export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';
export const ONLINE = 'ONLINE';
export const OFFLINE = 'OFFLINE';



export const FetchLeaderBoard = () => {
    return dispatch => {
        axios.get('/get-leader-board').then(data => {
            dispatch({type: UPDATE_LEADER_BOARD, payload: data.leaderboard})
        })
    }
}

export const UpdateGameStatus = (status) => {
    return dispatch => {
        axios.post("/update-online-status", {stauts}).then(() => {
            dispatch({
                type: UPDATE_GAME_STATUS,
                payload: status
            })
            dispatch({
                type: UPDATE_PROFILE,
                payload: {
                    online: status,
                    onlineTime: 0
                }
            })
        })
    }
}


const dummyLeaderboardData = [
    {
        key: "item1",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 1
        }
    },
    {
        key: "item2",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 2
        }
    },
    {
        key: "item3",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 3
        }
    },
    {
        key: "item4",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 4
        }
    },
    {
        key: "item5",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 5
        }
    },
    {
        key: "item6",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 5
        }
    },
    {
        key: "item7",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 5
        }
    },
    {
        key: "item8",
        value: {
            name: "John Doe",
            avatar: {uri: "https://res.cloudinary.com/dxuf2ssx6/image/upload/v1560931296/restaurant/backgrounds/katie-smith-104748-unsplash.jpg"},
            points: 342,
            position: 5
        }
    }
]