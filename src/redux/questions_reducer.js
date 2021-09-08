import {questionsAPI} from '../api/api';

const SET_QUESTIONS = 'SET_QUESTIONS';
const YOUNG_SORT = 'YOUNG_SORT';
const OLD_SORT = 'OLD_SORT';

const initialState = {
    questions: []
}

const questionsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_QUESTIONS:
            return {...state, questions: action.questions};
        case YOUNG_SORT:
            return {...state, questions: action.questions};
        default: return state;
    }
}

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});
export const setYoungQuestions = (questions) => ({type: YOUNG_SORT, questions});
export const setOldQuestions = (questions) => ({type: OLD_SORT, questions});

export const getAllQuestions = () => async (dispatch) => {
    let response = await questionsAPI.getAllQuestions();
    dispatch(setQuestions(response));
}
export const sortYoungerQuestions = () => async (dispatch) => {
    let response = await questionsAPI.sortYoungerQuestions();
    dispatch(setYoungQuestions(response));
}
export const sortOldQuestions = () => async (dispatch) => {
    let response = await questionsAPI.sortOldQuestions();
    dispatch(setYoungQuestions(response));
}


export default questionsReducer;