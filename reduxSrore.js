import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';

let reducers = combineReducers({
    weatherState: weatherReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;