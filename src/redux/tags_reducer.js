import { tagsAPI } from '../api/api';

const SET_TAGS = 'SET_TAGS';
const SORT_ACTIVITY = 'SORT_ACTIVITY';
const SORT_NAMES = 'SORT_NAMES';

const initialState = {
    tags: [],
}

const tagsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TAGS:
            return {...state, tags: action.tags}
        case SORT_ACTIVITY:
            return {...state, tags: action.tags}
        case SORT_NAMES:
            return{...state, tags: action.tags}
        default: 
            return {...state}
    }
}

export const setTags = (tags) => ({type: SET_TAGS, tags});
export const sortActivity = (tags) => ({type: SORT_ACTIVITY, tags});
export const sortNames = (tags) => ({type: SORT_NAMES, tags});

export const getAllTags = () => async (dispatch) => {
    console.log('all');
    let response = await tagsAPI.getAllTags();
    dispatch(setTags(response));
}
export const sortByActivity = () => async (dispatch) => {
    console.log('activity');
    let response = await tagsAPI.sortByActivity();
    dispatch(sortActivity(response));
}
export const sortByName = () => async (dispatch) => {
    console.log('name');
    let response = await tagsAPI.sortByName();
    dispatch(sortNames(response));
}

export default tagsReducer;