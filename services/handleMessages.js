// import { store } from '../store/configureStore'
// import { StartGame, SetGameResults } from '../store/actions/game'



export default (message) => {
    switch(message.message.toUpperCase()) {
        case "NEW_REQUEST":
            console.log(message)
            return
            // return store.dispatch(AddChallengeRequest(message.data))
        case "NEW_GAME":
            // return store.dispatch(StartGame(message.data))
        case "GAME_RESULT":
            // return store.dispatch(SetGameResults(message.data))
    }
}