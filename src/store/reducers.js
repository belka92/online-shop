import { combineReducers } from "redux";
import { catReducer } from "./cat/reducer";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./tocart/reducer";
import { userReducer } from "./user/reducer";
import { wishReducer } from "./wishlist/reducer";

export const reducers = combineReducers ({
    productData: productReducer,
    userData: userReducer,
    tocartData: cartReducer,
    wishData: wishReducer,
    catData: catReducer,

})