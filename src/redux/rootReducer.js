import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import userReducer from './user/user.reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    user : userReducer,
});

export default rootReducer;