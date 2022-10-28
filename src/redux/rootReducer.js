import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';
import cartReducer from './cart/cartReducer';


// Since the createStore() in store.js can take only one reducer, 
// hence combineReducer() is used to convert multiple reducers into one.
const rootReducer = combineReducers({
    counter: counterReducer,
    toggleCart: cartReducer,
});

export default rootReducer;