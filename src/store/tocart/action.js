import {DEL_CART, MINUS_CART, NEW_CART, PLUS_CART} from './type'


export const addCart=(cart)=>{
    return {type: NEW_CART, value: cart}
};

export const plusCart=(plusC)=>{
    return {type: PLUS_CART, value: plusC}
}

export const minusCart=(minusC)=>{
    return {type: MINUS_CART, value: minusC}
}

export const delCart=(delC)=>{
    return {type: DEL_CART, value: delC}
}