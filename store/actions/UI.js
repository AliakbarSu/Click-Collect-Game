export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';


export const StartLoading = (message = {heading: null, body: null, code: null}) => {
    return {
        type: START_LOADING,
        payload: message
    }
}

export const StopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const SetError = (message = {heading: null, body: null, code: null}) => {
    return {
        type: SET_ERROR,
        payload: message
    }
}

export const ClearError = () => {
    return {
        type: ClearError
    }
}