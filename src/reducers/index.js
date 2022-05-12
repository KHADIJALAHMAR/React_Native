import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import userIdReducer from "./userIdReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authenticated: authReducer,
    // role: roleReducer,
    // id: userIdReducer
})

export default allReducers;