import { NEW_CAT } from './type'


export const newCat=(cat)=>{
    return {type: NEW_CAT, value: cat}
}