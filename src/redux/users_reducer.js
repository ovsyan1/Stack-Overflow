import {getAPI} from '../api/api';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, users: action.users.data}
        default: 
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = () => {
    return (dispatch) => {
        getAPI.getUsers().then(data => {
            dispatch(setUsers(data));
        })
    }
}

export default usersReducer;