import {ADD_FEED, NEW_PRODUCT} from './type'
import { DEL_PRODUCT } from './type'


export const newProduct=(value)=>{
    return {type: NEW_PRODUCT, value: value}
}

export const delProduct=(value)=>{
    return {type: DEL_PRODUCT, value: value}
}

export const addfeed=(feed)=>{
    return {type: ADD_FEED, value: feed}
}


export const addItem = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}