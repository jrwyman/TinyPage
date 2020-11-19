import { combineReducers } from 'redux';
import session from './session_reducer';

const RootReducer = combineReducers({
    session // { isAutheticated: true, user: {} }
});

export default RootReducer;