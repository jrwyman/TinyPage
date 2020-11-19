import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN,
    RECEIVE_SESSION_ERRORS
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {},
    errors: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            console.log(action);
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            };
        case RECEIVE_USER_LOGOUT:
            console.log(action);
            return {
                ...state,
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        case RECEIVE_SESSION_ERRORS:
            return {
                ...state,
                errors: action.errors
            }
        default:
            return state;
    }
}