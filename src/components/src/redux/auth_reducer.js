// import {authAPI} from '../api/api'; 


// const SET_USER_DATA = 'SET_USER_DATA';

// let initialState = {
//     userId: null,
//     displayName: null
// }

// const authReducer = (state = initialState, action) => {
//     switch(action.type){
//         case SET_USER_DATA:
//             return {...state, ...action.payload}
//         default: return state;
//     }
// }

// export const setAuthUserData = (userId, displayName) => ({type: SET_USER_DATA, payload: {userId, displayName}})

// export const getAuthUserData = () => async (dispatch) => {
//     let response = await authAPI.me();
//     let {userId, displayName} = response.items;
//     dispatch(setAuthUserData(userId, displayName))
// }

// export default authReducer;