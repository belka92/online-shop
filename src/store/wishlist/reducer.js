import { wishlist } from "./state";
import { DEL_HEART, WISHLIST } from "./type";

export const wishReducer = (state = wishlist, action) => {
    switch (action.type) {
        case WISHLIST://{user_id, product_id}
            let us = state.arr.findIndex(a => a.product_id == action.value.product_id && a.user_id == action.value.user_id)
            console.log(us);
            console.log(action.value);
            if (us != -1) {
                state.arr.splice(us, 1)
            } else {
                state.arr.push(action.value)
            }
            break;

            case DEL_HEART://action.value = {id}cart
            state.arr = state.arr.filter(e => e.id != action.value.id)
            break
        default:
            break
    }


    return { ...state }
}
