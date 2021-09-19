import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import tagsReducer from './tags_reducer';
import oneQuestionReducer from './oneQuestion_reducer';
import answersReducer from './answers_reducer';
import searchReducer from './search_reducer';

let reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    mainPage: questionsReducer,
    tagsPage: tagsReducer,
    oneQuestion: oneQuestionReducer,
    answersPage: answersReducer,
    searchPage: searchReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;