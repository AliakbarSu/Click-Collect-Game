import { StartLoading, StopLoading } from "./UI";
import * as navigation from '../../navigation/rootNavigation'
// import websocket from '../../services/websocket'
// import eventHandler from '../../services/handleMessages'

export const ACCEPTED = 'ACCEPTED';
export const PLAYING = 'PLAYING';
export const COMPLETED = 'COMPLETED';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const ADD_CHALLENGE_REQUEST = 'ADD_CHALLENGE_REQUEST';
export const CLEAR_CHALLENGE_REQUEST = 'CLEAR_CHALLENGE_REQUEST';
export const ACCEPT_CHALLENGE_REQUEST = 'ACCEPT_CHALLENGE_REQUEST';
export const START_GAME = 'START_GAME';
export const SET_GAME_RESULTS = 'SET_GAME_RESULTS';
export const CLEAR_GAME_RESULTS = 'CEAR_GAME_RESULTS';
export const UPDATE_GAME_TOKEN = 'UPDATE_GAME_TOKEN';
export const UPDATE_TIME = 'UPDATE_TIME';


export const UpdateLocation = (location) => {
    return (dispatch, getStore) => {
        dispatch({type: UPDATE_LOCATION, payload: location})
    }
}



export const AddChallengeRequest = (challengeRequestData) => {
    return (dispatch, getStore) => {
        if(getStore().game.challengeRequest.status == null) {
            dispatch({
                type: ADD_CHALLENGE_REQUEST,
                payload: challengeRequestData
            })
            navigation.navigate("request")
        }
       
        
    }
}

export const RejectChallengeRequest = () => {
    return (dispatch, getStore) => {
        // const socket = new websocket(getStore().auth.token, eventHandler).getConnection()
        // const message = {
        //     message: "rejectRequest", 
        //     data: {
        //         requestId: getStore().game.challengeRequest._id,
        //         token: getStore().auth.token
        //     }
        // }
        // socket.emit(message)
        dispatch({
            type: CLEAR_CHALLENGE_REQUEST
        })
        navigation.navigate("reject")
    }
}

export const AcceptChallengeRequest = () => {
    return (dispatch, getStore) => {
        // const socket = new websocket(getStore().auth.token, eventHandler).getConnection()
        // const message = {
        //     message: "acceptRequest", 
        //     data: {
        //         requestId: getStore().game.challengeRequest._id,
        //         token: getStore().auth.token
        //     }
        // }
        // socket.emit(message)
        dispatch({ type: ACCEPT_CHALLENGE_REQUEST})
        navigation.navigate("accept")
    }
}

export const StartGame = payload => {
    return (dispatch, getStore) =>  {
        dispatch({
            type: START_GAME,
            payload: payload
        })
        navigation.navigate("quize")
    }
}



export const ResetGame = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_GAME_RESULTS
        })
    }
}



export const SubmitAnswers = answers => {
    return (dispatch, getStore) => {
        // const socket = new websocket(getStore().auth.token, eventHandler).getConnection()
        // const message = {
        //     gameId: getStore().game.challengeRequest._id,
        //     questionId: getStore().game.currentGame.question._id,
        //     answerIds: answers.map(answer => answer.id)
        // }
        // socket.emit(message)
    }
}

export const SetGameResults = (results) => {
    return dispatch => {
        dispatch({
            type: SET_GAME_RESULTS,
            payload: {
                won: results.won,
                points: results.points,
                winner: results.winner,
                wrongAnswers: [
                    {id: 'jfkafjs;alfjksfj', question: 'What is the capital of US?', answer: 'New York'},
                    {id: 'jfkafjs53535fjksfj', question: 'Who is the tallest person on earth?', answer: 'Robert Marker'}
                ],
                correctAnswers: [
                    {id: 'jfkafjw2444lfjksfj', question: 'How many grams in a kilo?', answer: 1000},
                    {id: 'jfkaf1313alfjksfj', question: 'Who is the current president of the US?', answer: 'Donald Trump'}
                ]
            }})
        if(results.won) {
            navigation.navigate("won")
        }else {
            navigation.navigate("lost")
        }
        
    }
}



export const GiveUp = () => {
    return (dispatch, getStore) => {
        // const socket = new websocket(getStore().auth.token, eventHandler)
        // const message = {
        //     gameId: getStore().game.currentGame._id,
        //     token: getStore().auth.token
        // }
        // socket.emit(message)
        navigation.navigate("lost")
    }
}



export const SendChallenge = () => {
    return dispatch => {
    }
}

export const SendChallengeReq = (username, level, points) => {
    return dispatch => {
        // make api call
        dispatch(StartLoading({heading: 'Sending Challenge Request', body: 'Awaiting for the request to be accepted', code: 0}))
    }
}