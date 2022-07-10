import { productsState } from "../products/state";
import { cart } from "./state";
import { DEL_CART, MINUS_CART, NEW_CART, PLUS_CART } from "./type";

export const cartReducer = (state = cart, action) => {
    state ={...state}
    switch (action.type) {

        case NEW_CART://action.value == {user_id, product_id}
            let x = state.arr.find(e => e.user_id == action.value.user_id && e.product_id == action.value.product_id)
            if (x) {
                let prod = productsState.products.find(e => e.id == x.product_id);
                if (prod.count > x.quantity) {
                    x.quantity++
                }
            } else {
                state.arr.push({ ...action.value, id: Date.now(), quantity: 1 })
            }
            break;
        case PLUS_CART://action.value = {id}cart
            let x1 = state.arr.find(e => e.id == action.value.id)
            if (x1) {
                let prod = productsState.products.find(e => e.id == x1.product_id);
                if (prod.count > x1.quantity) {
                    x1.quantity++
                }
            }
            break;
        case MINUS_CART://action.value = {id}cart
            let x2 = state.arr.find(e => e.id == action.value.id)
            x2.quantity--;
            if (x2.quantity <= 0) {
                state.arr = state.arr.filter(e => e.id != action.value.id)
            }
            break;
        case DEL_CART://action.value = {id}cart
            state.arr = state.arr.filter(e => e.id != action.value.id)
            break
        default:
            break
    }


    return state
}
