import * as axios from 'axios';

export const getAPI = {
    getUsers(){
        return axios.get('https://api.stackexchange.com/2.2/sites')
        .then(response => {
            return response
        })
    }
}