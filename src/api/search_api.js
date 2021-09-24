import {instance} from './api';

export const searchAPI = {
    search(word){
        return instance.get(`/2.3/search?order=desc&sort=activity&tagged=${word}&site=stackoverflow`)
    }
}