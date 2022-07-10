import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Profile.css'


function Profile() {
    const users = useSelector(st => st.userData.profile)

    return (
        <>
            <Navbar />
            <div className='cardAll'>
            <div className="card" style={{ width: '20rem'}}>
                <img src="../img/27.jpg" className="card-img-top" />
                <div className="card-body" style={{ width: '20rem'}}>
                    <h5 className="card-title">{users.name} {users.surname}</h5>
                    <p className="card-text"><Link to="/myProduct">
                        <button className='btn btn-primary'> My Product</button>
                    </Link></p>
                   <p className="card-text"> <button className='btn btn-primary'> Settings</button></p>
                   <p className="card-text"><button className='btn btn-primary'> Order</button></p> 
                </div>
            </div>
            </div>

        </>
    )
}

export default Profile;
