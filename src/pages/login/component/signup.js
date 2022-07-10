import { useForm } from "react-hook-form"

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../../store/user/action";


export const Signup = () => {
    const users = useSelector(st=>st.userData.arr)
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const use = users.find(e=>e.email==data.email);
        if(use){
            alert('email is already');
        }else{
            if(data.password==data.confirm_password){
                dispatch(addNewUser({...data}));
            }else{
                alert('password invalid')
            }
        }

    };
    return (
        <div className="formUp">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Registration</h3>
                <input className="inpLog" placeholder='name'{...register('name', {required:true})} />
                {errors.name && <p>name is required.</p>}
                <input className="inpLog" placeholder='surname'{...register('surname', { required: true })} />
                {errors.surname && <p>surname is required.</p>}
                <input className="inpLog" placeholder='age' {...register('age', { pattern: /\d+/ , required:true})} />
                {errors.age && <p>Please enter number for age.</p>}
                <input className="inpLog" placeholder="email" {...register('email', { required: true , pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
                {errors.email && <p>email is required.</p>}
                <input className="inpLog" placeholder='password' type='password' {...register('password', { required: true})} />
                {errors.password && <p>password is required.</p>}
                <input className="inpLog" placeholder='confirm password'type='password' {...register('confirm_password', { required: true })} />
                {errors.confirm_password && <p>confirm password is required.</p>}
                <input className="inpLog" type="submit" />
            </form>
        </div>
    )
}
