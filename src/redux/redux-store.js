import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;