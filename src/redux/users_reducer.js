import {usersAPI} from '../api/api';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SORT_USERS = 'SORT_USERS';

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
        case SORT_USERS:
            return {...state, users: action.users.data}
        default: 
            return state;
    }
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const sortUsers = (users) => ({type: SORT_USERS, users});


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
        let response = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response));
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsersTotalCount(response.data.items.length))
}
export const sortUsersByName = (currentPage, pageSize) => async (dispatch) => {
        let response = await usersAPI.sortUsersByName(currentPage, pageSize)
            dispatch(sortUsers(response))
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsersTotalCount(response.data.items.length))
}
export const sortUsersByReputation = (currentPage, pageSize) => async (dispatch) => {
    let response = await usersAPI.sortUsersByReputation(currentPage, pageSize)
        dispatch(sortUsers(response))
}
export const sortUsersByCreation = (currentPage, pageSize) => async (dispatch) => {
    let response = await usersAPI.sortUsersByCreation(currentPage, pageSize)
        dispatch(sortUsers(response))
}
export default usersReducer;