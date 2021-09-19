import { searchAPI } from '../api/api';


const SET_SEARCH_WORD = 'SET_SEARCH_WORD';

const initialState = {
    word: null
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SEARCH_WORD:
            return {...state, word: action.word}
        default:
            return state
    }
}

export const setSearch = (word) => ({type: SET_SEARCH_WORD, word})

export const search = (word) => async (dispatch) => {
    let response = await searchAPI.search(word);
    dispatch(setSearch(response));
}
 
export default searchReducer;