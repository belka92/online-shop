import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "../pages/women/Women";
import LogIn from "../pages/login/LogIn";
import React from "react";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import MyProduct from "../pages/myproduct/MyProduct";
import ToCart  from "../pages/tocart/ToCart";
import ProductDetail from "../pages/productDetail/ProductDetail";
import WishList from "../pages/wishlist/WishList";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/cat/:name" element={<Women />} />
                    <Route path="/seeProduct/:id" element={<ProductDetail />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/tocart' element={<ToCart />} />
                    <Route path='/myProduct' element={<MyProduct />} />
                {/* <Route path='*' element={<Error />}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;