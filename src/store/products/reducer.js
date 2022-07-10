import { productsState } from "./state";
import { ADD_FEED, DEL_PRODUCT, NEW_PRODUCT } from "./type";

export const productReducer = (state=productsState, action)=>{
    switch(action.type){
        case NEW_PRODUCT:
            state.products.push(action.value)
            break;
        case DEL_PRODUCT:
            state.products.splice(action.value, 1)
            break;
        case ADD_FEED:
            state.products.feedback.push(action.value)
            break;
        default:
            break;
    }

    
    return {...state}
}


