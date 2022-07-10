import { useForm } from "react-hook-form"

import React from 'react'
import { useNavigate } from "react-router-dom";
import { addUserProfile } from "../../../store/user/action";
import { useDispatch, useSelector } from "react-redux";


export const Signin = () => {
    const users = useSelector(st=>st.userData.arr)
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitLogin = (data) => {

        const use = users.find(e=>e.email==data.email && e.password == data.password);
        if(use){
            dispatch(addUserProfile({...use}))
            navigate('/profile');
        }else{
            alert('email or password invalid')
        }
    }

    return (
        <div className="formIn">
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <h3>Log In</h3>
                <input className="inpLog" placeholder="email" {...register('email', { required: true , pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                {errors.email && <p>email is required.</p>}
                <input className="inpLog" type='password' placeholder="password" {...register('password', { required: true})} />
                {errors.password && <p>password is required.</p>}
                <input className="inpLog" type="submit" />
            </form>
        </div>
    )
}
