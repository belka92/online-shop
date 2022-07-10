import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { addCart, delCart, minusCart, plusCart } from "../../store/tocart/action";

const ToCart = () => {
    const state = useSelector((st) => st.tocartData.arr)
    const profile = useSelector((st) => st.userData.profile)
    const product = useSelector((st) => st.productData.products)
    const dispatch = useDispatch()
    const params = useParams()
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        edit()
    }, [state])

    const edit = () => {
        let arr = state.filter(e => e.user_id == profile.id);
        for (let e of arr) {
            e.prod = product.find(a => a.id == e.product_id)
        }
        setData([...arr])
        setTotal(arr.reduce((a, b) => a + b.quantity * b.prod.price, 0))
    }



    return (<div>
        <Navbar/>
        <div class="container mt-5 py-5">
            <h1>My Cart</h1>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.prod.name}</td>
                                    <td><img src={'http://localhost:3000/' + e.prod.img[0]} width='100' /></td>
                                    <td>$ {e.prod.price}</td>
                                    <td>{e.prod.count}</td>
                                    <td>{e.quantity}</td>
                                    <td>$ {e.quantity * e.prod.price}</td>
                                    <td>
                                        <button onClick={() => {
                                            dispatch(plusCart({ id: e.id }))
                                            edit()
                                        }} className='btn btn-outline-warning text-white'>+</button>
                                        <button onClick={() => {
                                            dispatch(minusCart({ id: e.id }))
                                            edit()
                                        }} className='btn btn-outline-warning text-white'>-</button>
                                        <button onClick={() => {
                                            dispatch(delCart({ id: e.id }))
                                            edit()
                                        }} className='btn btn-danger text-white'>&times;</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2>Estimated total ${total}</h2>

        </div>


    </div>
    )
}

export default ToCart;
