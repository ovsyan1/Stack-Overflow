import {usersAPI} from '../api/api';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    sortParams: ''
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, users: action.users.data}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
        default: 
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
        let response = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response));
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsersTotalCount(response.data.items.length))
}
export const sortUsersByName = () => async (dispatch) => {
        let response = await usersAPI.sortUsersByName();
            dispatch(setUsers(response))
}
export const sortUsersByReputation = () => async (dispatch) => {
    let response = await usersAPI.sortUsersByReputation();
        dispatch(setUsers(response))
}
export const sortUsersByCreation = () => async (dispatch) => {
    let response = await usersAPI.sortUsersByCreation();
        dispatch(setUsers(response))
}
export default usersReducer;