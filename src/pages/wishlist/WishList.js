import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { delheart } from '../../store/wishlist/action';
import { addCart } from "../../store/tocart/action";

import Swal from "sweetalert2"
import Navbar from '../../components/Navbar/Navbar';




function WishList(){
    const state = useSelector((st) => st.wishData.arr)
    const profile = useSelector((st) => st.userData.profile)
    const product = useSelector((st) => st.productData.products)
    const cart = useSelector(st => st.tocartData);

    const dispatch = useDispatch()
    const [data, setData] = useState([])

    useEffect(() => {
        edit()
    }, [state])

    const edit = () => {
        let arr = state.filter(e => e.user_id == profile.id);
        for (let e of arr) {
            e.prod = product.find(a => a.id == e.product_id)
        }
        setData([...arr])

    }


    return (<div>
        <Navbar/>
        <div class="container mt-5 py-5">
            <h2>My Wish List</h2>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>To Cart</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td><Link to={{pathname:`/seeProduct/${e.prod.id}`}}>{e.prod.name}</Link></td>
                                    <td><img src={'http://localhost:3000/' + e.prod.img[0]} width='100' /></td>
                                    <td>$ {e.prod.price}</td>
                                    <td><div onClick={() => {
                                        if (profile.name) {
                                            dispatch(addCart({ user_id: profile.id, product_id: e.prod.id }))
                                            Swal.fire({
                                                position: 'top-end',
                                                icon: 'success',
                                                title: 'Your product add to cart',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        } else {
                    
                    
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: '<a href="/login">Go to Login</a>'
                                            })
                    
                                        }
                                    }}><i className='fas fa-cart-arrow-down'></i>
                                    </div></td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(delheart({ id: e.id }))
                                            edit()
                                        }} className='btn btn-danger text-white'>&times;</button></td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
    )
}

export default WishList;