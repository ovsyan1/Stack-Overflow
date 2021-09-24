import { questionAPI } from "../api/questions_api";

const SET_QUESTION = 'SET_QUESTION';

const initialState = {
    question: null
}

const oneQuestionReducer = (state = initialState, action) => {
        switch(action.type){
            case SET_QUESTION: 
                return {...state, question: action.question}
            default:
                return state;
        }

}

export const setOneQuestion = (question) => ({type: SET_QUESTION, question});


export const getQuestionId = (questionId) => async (dispatch) => {
        let response = await questionAPI.getQuestionId(questionId);
        dispatch(setOneQuestion(response));
}

export default oneQuestionReducer;