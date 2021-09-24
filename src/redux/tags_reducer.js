import { tagAPI, tagsAPI } from '../api/tags_api';

const SET_TAGS = 'SET_TAGS';
const SET_TAG = 'SET_TAG';
const SET_TAG_INFO = 'SET_TAG_INFO';

const initialState = {
    tags: [],
    tagWiki: null,
    tagInfo: null
}

const tagsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TAGS:
            return {...state, tags: action.tags}
        case SET_TAG:
            return {...state, tagWiki: action.tag}
        case SET_TAG_INFO:
            return {...state, tagInfo: action.tag}
        default: 
            return {...state}
    }
}

export const setTags = (tags) => ({type: SET_TAGS, tags});
export const setTag = (tag) => ({type: SET_TAG, tag});
export const setTagInfo = (tag) => ({type: SET_TAG_INFO, tag});

export const getAllTags = () => async (dispatch) => {
    let response = await tagsAPI.getAllTags();
    dispatch(setTags(response));
}
export const sortByActivity = () => async (dispatch) => {
    let response = await tagsAPI.sortByActivity();
    dispatch(setTags(response));
}
export const sortByName = () => async (dispatch) => {
    let response = await tagsAPI.sortByName();
    dispatch(setTags(response));
}
export const getTagWiki = (tag) => async (dispatch) => {
    let response = await tagAPI.getTagWiki(tag);
    dispatch(setTag(response));
}
export const getTagFAQ = (tag) => async (dispatch) => {
    let response = await tagAPI.getTagFAQ(tag);
    dispatch(setTagInfo(response));
}

export default tagsReducer;