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
    sortUsersByCreation(currentPage = 1){
        return axios.get(`${baseURL}/2.3/users?page=${currentPage}&order=asc&sort=creation1&site=stackoverflow`)
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
    }
}

export const questionAPI = {
    getQuestionId(questionId){
        return axios.get(`${baseURL}/2.3/questions/${questionId}?order=desc&sort=activity&site=stackoverflow`)
    }
}

export const tagsAPI = {
    getAllTags(){
        return axios.get(`${baseURL}/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=!nKzQUR6(B-`);
    },
    sortByActivity(){
        return axios.get(`${baseURL}/2.3/tags?order=desc&sort=activity&site=stackoverflow&filter=!nKzQUR6(B-`);
    },
    sortByName(){
        return axios.get(`${baseURL}/2.3/tags?order=asc&sort=name&site=stackoverflow&filter=!nKzQUR6(B-`);
    }
}