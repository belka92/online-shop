import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/tocart/action";
import Swal from "sweetalert2"
import { wishlist } from "../../store/wishlist/action";
import Navbar from "../../components/Navbar/Navbar";


const ProductDetail = () => {
    const params = useParams()
    const { products } = useSelector(state => state.productData)
    const [prod, setArr] = useState({})
    useEffect(() => {
        setArr({ ...products.find(e => e.id == params.id) })
    }, [params])
    const profile = useSelector(st => st.userData.profile);
    const dispatch = useDispatch()

    function str(newFeed){
       setArr(newFeed.target.value) 

    }

    return (
        <>
        <Navbar/>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={prod.img} alt={prod.name} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{prod.name}</h1>
                        <hr />
                        <h2 className="my-4">${prod.price}</h2>
                        <p className="lead">{prod.description}</p>
                        <button onClick={() => {
                            if (profile.name) {
                                dispatch(addCart({ user_id: profile.id, product_id: prod.id }))
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
                        }} className="btn btn-outline-primary my-4">Add to Cart</button>

                        <button onClick={() => {

                            if (profile.name) {
                                dispatch(wishlist({ id: Date.now(), user_id: profile.id, product_id: prod.id }))
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    footer: '<a href="/login">Go to Login</a>'
                                })

                            }


                        }} className="btn btn-outline-primary ">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default ProductDetail;