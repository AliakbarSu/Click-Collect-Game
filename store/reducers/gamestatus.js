import { UPDATE_LEADER_BOARD, UPDATE_GAME_STATUS } from "../actions/gamestatus";
import { UPDATE_LOCATION } from '../actions/game'

const initialState = {
    leaderboard: [],
    status: null,
    location: {
        latitude: 0,
        longitude: 0
    }
}

const GamestatusReducer = (state = initialState, action ) => {
    switch(action.type) {
        case UPDATE_LEADER_BOARD:
            return {
                ...state,
                leaderboard: action.payload
            }
        case UPDATE_GAME_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case UPDATE_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        default: 
            return state;
    }
}

export default GamestatusReducer;