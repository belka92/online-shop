import {NEW_USER, USER_ERROR, USER_PROFILE} from './type'


export const addNewUser=(use)=>{
    return {type: NEW_USER, value: use}
};

export const addUserProfile = (use)=>{
    return {type:USER_PROFILE,value: use}
};


export const addUserError = (use)=>{
    return {type:USER_ERROR,value: use}
};