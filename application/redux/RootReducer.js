import { combineReducers } from 'redux';
import { 
    User_Reducer
} from './reducers';

export default RootReducer = combineReducers({
    user: User_Reducer,
});