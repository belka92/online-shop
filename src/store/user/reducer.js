import { user } from "./state";
import { NEW_USER, USER_ERROR, USER_PROFILE } from "./type";

export const userReducer = (state=user, action)=>{
    switch(action.type){
        case NEW_USER:
            state.arr.push(action.value)
            break;
        case USER_PROFILE:
            state.profile = action.value
            break;
        case USER_ERROR:
            state.error = action.value
            break;
        default:
            break
    }

    
    return {...state}
}
