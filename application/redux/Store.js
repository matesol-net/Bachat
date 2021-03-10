import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';

export default Store = createStore(RootReducer, applyMiddleware(thunk));