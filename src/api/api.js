import * as axios from 'axios';

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://api.stackexchange.com',
// })
const baseURL = 'http://api.stackexchange.com';

export const usersAPI = {
    getUsers(currentPage = 1){
        return axios.get(`${baseURL}/2.3/users?page=${currentPage}&site=stackoverflow`)
    },
    sortUsersByName(currentPage = 1){
        return axios.get(`${baseURL}/2.3/users?page=${currentPage}&order=asc&sort=name&site=stackoverflow`)
    },
    sortUsersByReputation(currentPage = 1){
        return axios.get(`${baseURL}/2.3/users?page=${currentPage}&order=asc&sort=reputation&site=stackoverflow`)
    },
    sortUsersByCreation(){
        return axios.get(`${baseURL}/2.3/users?order=asc&sort=creation&site=stackoverflow`)
    }
}

export const profileAPI = {
    getProfile(userId = 2){
        return axios.get(`${baseURL}/2.3/users/${userId}?site=stackoverflow`)
    }
}

export const questionsAPI = {
    getAllQuestions(){
        return axios.get(`${baseURL}/2.3/questions?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortYoungerQuestions(){
        return axios.get(`${baseURL}/2.3/questions?order=desc&sort=creation&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortOldQuestions(){
        return axios.get(`${baseURL}/2.3/questions?order=asc&sort=creation&site=stackoverflow&filter=!6VvPDzQHaprdq`)
    },
    sortHotQuestions(){
        return axios.get(`${baseURL}/2.3/questions?order=desc&sort=hot&site=stackoverflow`);
    },
    sortByVotesQuestions(){
        return axios.get(`${baseURL}/2.3/questions?order=desc&sort=votes&site=stackoverflow`);
    }
}

export const questionAPI = {
    getQuestionId(questionId = 6){
        return axios.get(`${baseURL}/2.3/questions/${questionId}?&site=stackoverflow&filter=!6VvPDzRe9gpYa`)
    }
}

export const tagsAPI = {
    getAllTags(){
        return axios.get(`${baseURL}/2.3/tags?order=desc&site=stackoverflow&filter=!bQ*pzSribilYhl`);
    },
    sortByActivity(){
        return axios.get(`${baseURL}/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=!bQ*pzSribilYhl`);
    },
    sortByName(){
        return axios.get(`${baseURL}/2.3/tags?order=asc&sort=name&site=stackoverflow&filter=!nKzQUR6(B-`);
    }
}
export const tagAPI = {
    getTagWiki(tag){
        return axios.get(`${baseURL}/2.3/tags/${tag}/wikis?site=stackoverflow`)
    },
    getTagFAQ(tag){
        return axios.get(`${baseURL}/2.3/tags/${tag}/faq?site=stackoverflow`)
    }
}

export const answerAPI = {
    getAnswersForQuestion(answerId){
        return axios.get(`${baseURL}/2.3/questions/${answerId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!6VvPDzQKYj_yu`)
    }
}