import * as axios from 'axios';

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://api.stackexchange.com',
// })

export const usersAPI = {
    getUsers(currentPage = 1){
        return axios.get(`https://api.stackexchange.com/2.3/users?page=${currentPage}&site=stackoverflow`)
        // .then(response => {
        //     return response
        // })
    },
    sortUsersByName(currentPage = 1){
        return axios.get(`https://api.stackexchange.com/2.3/users?page=${currentPage}&order=asc&sort=name&site=stackoverflow`)
            // .then(response => {
            //     return response
            // })
    },
    sortUsersByReputation(currentPage = 1){
        return axios.get(`https://api.stackexchange.com/2.3/users?page=${currentPage}&order=asc&sort=reputation&site=stackoverflow`)
    },
    sortUsersByCreation(currentPage = 1){
        return axios.get(`https://api.stackexchange.com/2.3/users?page=${currentPage}&order=asc&sort=creation1&site=stackoverflow`)
    }
}

export const profileAPI = {
    getProfile(userId){
        return axios.get(`https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`)
    }
}