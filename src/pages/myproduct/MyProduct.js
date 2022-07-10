import { useForm } from "react-hook-form"

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { delProduct, newProduct } from "../../store/products/action";
import './MyProduct.css'
import Swal from "sweetalert2"
import Navbar from "../../components/Navbar/Navbar";



function MyProduct() {
    const product = useSelector(st => st.productData)
    const user = useSelector(st => st.userData.profile)
    const dispatch = useDispatch();
    const arr = useSelector(st => st.catData.arr)
    const arrImg = ["/img/09.png", "/img/10.jpg", "/img/08.jpg"]
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(newProduct({ ...data, id: Date.now(), user_id: user.id }))
       

          Swal.fire({
            title: 'Your product added',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    };



    return (
        <>
        <Navbar/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add New Product</h2>
                <input className="inp1" placeholder='name'{...register('name', { required: true })} />
                {errors.name && <p>name is required.</p>}
                <input className="inp1" placeholder='count' {...register('count', { pattern: /\d+/, required: true })} />
                {errors.count && <p>Please enter number for count.</p>}
                <input className="inp1" placeholder='price' {...register('price', { pattern: /\d+/, required: true })} />
                {errors.price && <p>Please enter number for price.</p>}
                <input className="inp1" placeholder='description'{...register('description', { required: true })} />
                {errors.description && <p>description is required.</p>}
                <select className="inp1" {...register('category', { required: true })}>
                    {arr.map((e, i) => {
                        return <option key={e.id} value={e.name}>{e.name}</option>
                    })}
                </select>
                <select className="inp1" multiple {...register('img', { required: true })}>
                    {arrImg.map((e, i) => {
                        return <option key={i} value={e}>{e}</option>
                    })}
                </select>
                <input className="inp1" type="submit" />
            </form>

            <hr></hr>
            {
                product.products?.map((el, index) => {

                    return (
                        <>

                            <div key={el.id} >

                                {
                                    el.user_id == user.id ?
                                        <div className="div_main">
                                            <div className="div_img">
                                                <img className="image-grid-col-2" src={el.img[0]} />
                                            </div>
                                            <div className="div_txt">
                                                <h1>{el.name}</h1>
                                                <div><h3>{el.category}</h3></div>
                                            </div>
                                            <button onClick={() => dispatch(delProduct(index))}>Delete Product</button>
                                        </div>
                                        : ''

                                }

                            </div>


                        </>

                    )


                })

            }


        </>
    )
}

export default MyProduct;