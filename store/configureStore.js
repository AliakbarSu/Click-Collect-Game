import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/root';
import gameStatusReducer from './reducers/gamestatus';
import userReducer from './reducers/user';
import gameReducer from './reducers/game';
import authReducer from './reducers/auth';
import UIReducer from './reducers/UI';
import ProfileReducer from './reducers/profile';
import ModalsReducer from './reducers/modal';

const rootReducer = combineReducers({
    root: mainReducer,
    gameStatus: gameStatusReducer,
    user: userReducer,
    game: gameReducer,
    auth: authReducer,
    profile: ProfileReducer,
    UI: UIReducer,
    modals: ModalsReducer
})

let composeEnhancers = compose;

if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
