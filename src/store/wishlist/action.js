import { DEL_HEART, WISHLIST} from './type'


export const wishlist=(wish)=>{
    return {type: WISHLIST, value: wish}
};


export const delheart=(delH)=>{
    return {type: DEL_HEART, value: delH}
}