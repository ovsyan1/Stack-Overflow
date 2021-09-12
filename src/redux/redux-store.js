import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import tagsReducer from './tags_reducer';
import oneQuestionReducer from './oneQuestion_reducer';

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    mainPage: questionsReducer,
    tagsPage: tagsReducer,
    oneQuestion: oneQuestionReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;