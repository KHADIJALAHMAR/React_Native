import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import userIdReducer from "./userIdReducer";
import UsernameReducer from "./userUsernameReducer";
import userEmailReducer from './userEmailReducer'
import {combineReducers} from 'redux';
const allReducers = combineReducers({
    authenticated: authReducer,
    role: roleReducer,
    id: userIdReducer,
    email :userEmailReducer,
    username :UsernameReducer,
})

export default allReducers;