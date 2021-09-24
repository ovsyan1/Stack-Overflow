import {instance} from './api';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize){
        return instance.get(`/2.3/users?page=${currentPage}&pageSize=${pageSize}&order=desc&max=100&site=stackoverflow`)
    },
    sortUsersByName(currentPage = 1){
        return instance.get(`/2.3/users?page=${currentPage}&order=asc&sort=name&site=stackoverflow`)
    },
    sortUsersByReputation(currentPage = 1){
        return instance.get(`/2.3/users?page=${currentPage}&order=asc&sort=reputation&site=stackoverflow`)
    },
    sortUsersByCreation(){
        return instance.get(`/2.3/users?order=asc&sort=creation&site=stackoverflow`)
    }
}