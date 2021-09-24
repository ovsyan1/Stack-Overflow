import {instance} from './api';

export const profileAPI = {
    getProfile(userId = 2){
        return instance.get(`/2.3/users/${userId}?site=stackoverflow`)
    }
}