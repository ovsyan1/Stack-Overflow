import {instance} from './api';

export const answerAPI = {
    getAnswersForQuestion(answerId){
        return instance.get(`/2.3/questions/${answerId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQKYj_yu`)
    }
}