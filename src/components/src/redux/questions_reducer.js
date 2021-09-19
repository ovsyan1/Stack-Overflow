import {questionsAPI} from '../api/api';

const SET_QUESTIONS = 'SET_QUESTIONS';

const initialState = {
    questions: []
}

const questionsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_QUESTIONS:
            return {...state, questions: action.questions};
        default: return state;
    }
}

export const setQuestions = (questions) => ({type: SET_QUESTIONS, questions});

const compareRequest = async (dispatch, apiMethod, actionCreator) => {
        let response = await apiMethod();
        dispatch(actionCreator(response));
}

export const getAllQuestions = () => async (dispatch) => {
    compareRequest(dispatch, questionsAPI.getAllQuestions.bind(questionsAPI), setQuestions);
}
export const sortYoungerQuestions = () => async (dispatch) => {
    compareRequest(dispatch, questionsAPI.sortYoungerQuestions.bind(questionsAPI), setQuestions);
}
export const sortOldQuestions = () => async (dispatch) => {
    compareRequest(dispatch, questionsAPI.sortOldQuestions.bind(questionsAPI), setQuestions);
}
export const sortHotQuestions = () => async (dispatch) => {
    compareRequest(dispatch, questionsAPI.sortHotQuestions.bind(questionsAPI), setQuestions);
}

export default questionsReducer;