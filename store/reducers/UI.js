import { START_LOADING, STOP_LOADING, SET_ERROR, CLEAR_ERROR } from "../actions/UI";

const initialState = {
    loading: false,
    error: false,
    message: {
        heading: null,
        body: null,
        code: null
    }
}

const UIReducer = (state = initialState, action ) => {
    switch(action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
                message: action.payload
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
                message: {heading: null, body: null, code: null}
            }
        case SET_ERROR:
            return {
                ...state,
                error: true,
                message: action.payload
            }
        case CLEAR_ERROR:
            return {
                ...state,
                message: {heading: null, body: null, code: null}
            }
        default: 
            return state;
    }
}

export default UIReducer;