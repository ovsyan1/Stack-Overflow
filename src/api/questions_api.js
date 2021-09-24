import {instance} from './api';

export const questionsAPI = {
    getAllQuestions(){
        return instance.get(`/2.3/questions?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortYoungerQuestions(){
        return instance.get(`/2.3/questions?order=desc&sort=creation&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortOldQuestions(){
        return instance.get(`/2.3/questions?order=asc&sort=creation&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortHotQuestions(){
        return instance.get(`/2.3/questions?order=desc&sort=hot&site=stackoverflow`);
    },
    sortByVotesQuestions(){
        return instance.get(`/2.3/questions?order=desc&sort=votes&site=stackoverflow`);
    }
}

export const questionAPI = {
    getQuestionId(questionId = 6){
        return instance.get(`/2.3/questions/${questionId}?&site=stackoverflow&filter=!6VvPDzRe9gpYa`)
    }
}