import { profileAPI } from "../api/profile_api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
        switch(action.type){
            case SET_USER_PROFILE: 
                return {...state, profile: action.profile}
            default:
                return state;
        }

}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const getUserProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
}

export default profileReducer;