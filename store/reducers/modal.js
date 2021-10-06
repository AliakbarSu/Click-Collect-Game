import { 
    OPEN_WON_MODAL,
    CLOSE_WON_MODAL, 
    OPEN_LOST_MODAL, 
    CLOSE_LOST_MODAL, 
    OPEN_PLAY_MODAL, 
    CLOSE_PLAY_MODAL , 
    OPEN_QUIZE_MODAL, 
    CLOSE_QUIZE_MODAL, 
    OPEN_REQUEST_MODAL, 
    CLOSE_REQUEST_MODAL, 
    CLOSE_LOADING_MODAL, 
    OPEN_LOADING_MODAL, 
    OPEN_AWAITING_RESULTS_MODAL,
    CLOSE_AWAITING_RESULTS_MODAL,
    OPEN_EXPIRED_REQUEST_MODAL,
    CLOSE_EXPIRED_REQUEST_MODAL} from "../actions/modal";

const initialState = {
    lost: {
        status: false
    },
    won: {
        status: false
    },
    play: {
        status: false
    },
    quize: {
        status: false
    },
    request: {
        status: false
    },
    loading: {
        status: false
    },
    awaitingResults: {
        status: false
    },
    expiredRequest: {
        status: false
    }
}

const ModalReducer = (state = initialState, action ) => {
    switch(action.type) {
        case OPEN_WON_MODAL:
            return {
                ...state,
                won: {
                    status: true
                }
            }
        case CLOSE_WON_MODAL:
            return {
                ...state,
                won: {
                    status: false
                }
            }
        case OPEN_LOST_MODAL:
            return {
                ...state,
                lost: {
                    status: true
                }
            }
        case CLOSE_LOST_MODAL:
            return {
                ...state,
                lost: {
                    status: false
                }
            }
        case OPEN_PLAY_MODAL:
            return {
                ...state,
                play: {
                    status: true
                }
            }
        case CLOSE_PLAY_MODAL:
            return {
                ...state,
                play: {
                    status: false
                }
            }
        case OPEN_QUIZE_MODAL:
            return {
                ...state,
                quize: {
                    status: true
                }
            }
        case CLOSE_QUIZE_MODAL:
            return {
                ...state,
                quize: {
                    status: false
                }
            }
        case OPEN_REQUEST_MODAL:
            return {
                ...state,
                request: {
                    status: true
                }
            }
        case CLOSE_REQUEST_MODAL:
            return {
                ...state,
                request: {
                    status: false
                }
            }
        case OPEN_LOADING_MODAL:
            return {
                ...state,
                loading: {
                    status: true
                }
            }
        case CLOSE_LOADING_MODAL:
            return {
                ...state,
                loading: {
                    status: false
                }
            }
        case OPEN_AWAITING_RESULTS_MODAL:
            return {
                ...state,
                awaitingResults: {
                    status: true
                }
            }
        case CLOSE_AWAITING_RESULTS_MODAL:
            return {
                ...state,
                awaitingResults: {
                    status: false
                }
            }
        case OPEN_EXPIRED_REQUEST_MODAL:
            return {
                ...state,
                expiredRequest: {
                    status: true
                }
            }
        case CLOSE_EXPIRED_REQUEST_MODAL:
            return {
                ...state,
                expiredRequest: {
                    status: false
                }
            }
        default: 
            return state;
    }
}

export default ModalReducer;