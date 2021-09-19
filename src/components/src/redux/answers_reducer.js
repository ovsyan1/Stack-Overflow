import { answerAPI } from "../api/api";

const SET_ANSWERS = 'SET_ANSWERS';

const initialState = {
    answers: []
}

const answersReducer = (state = initialState, action) => {
        switch(action.type){
            case SET_ANSWERS: 
                return {...state, answers: action.answers}
            default:
                return state;
        }

}

export const setAnswers = (answers) => ({type: SET_ANSWERS, answers});


export const getAnswersForQuestion = (answerId) => async (dispatch) => {
        let response = await answerAPI.getAnswersForQuestion(answerId);
        dispatch(setAnswers(response));
}

export default answersReducer;