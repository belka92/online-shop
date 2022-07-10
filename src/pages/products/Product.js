import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../store/tocart/action";
import "./Product.css"
import Swal from "sweetalert2"
import { wishlist } from "../../store/wishlist/action";


function Product({ product }) {
    const cart = useSelector(st => st.tocartData);
    const profile = useSelector(st => st.userData.profile);
    const heartState = useSelector(st => st.wishData.arr);
    const dispatch = useDispatch()
    return (
        <div className="div_main" style={{ border: '1px solid ' }}>
            <div className="div_img">
                <img className="image-grid-col-2" src={product.img[0]} />
            </div>
            <div className="div_txt">
                <Link to={`/seeProduct/${product.id}`}><h1>{product.name}</h1></Link>

                <h3>{product.category}</h3>
                <div className="prod_heart" onClick={() => {

                    if (profile.name) {
                        dispatch(wishlist({ id: Date.now(), user_id: profile.id, product_id: product.id }))
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            footer: '<a href="/login">Go to Login</a>'
                        })

                    }

                }}><p >
                        {
                            heartState.some(a => a.product_id == product.id && a.user_id == profile.id)
                                ? <i className="fa fa-heart" style={{ color: 'red' }}></i> : <i className="far fa-heart" ></i>
                        }
                    </p>
                </div>
                <div ><p onClick={() => {
                    if (profile.name) {
                        dispatch(addCart({ user_id: profile.id, product_id: product.id }))
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
                }}><i className='fas fa-cart-arrow-down'></i></p></div>
            </div>
        </div>
    )
}

export default Product;