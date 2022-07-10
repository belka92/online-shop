import React, { Component, useEffect, useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css"
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

function Navbar() {
    const [state, setState] = useState({ clicked: false })
    const [bool, setBool] = useState(false)
    const data = useSelector(st => st.userData.profile)
    const cart = useSelector(st => st.tocartData.arr);
    const [carts, setCarts] = useState([]) 
    console.log("data", data, cart);
    const handleClick = () => {
        setState({ clicked: !state.clicked })
    }
    useEffect(()=>{
        setCarts([...cart.filter(e=>e.user_id==data.id)])
    }, [cart, data])

    return (
        <>
            <header>

                <nav className="NavbarItems">
                    <Link to="/"> <h1 className="navbar-logo">HIKING SHOP</h1> </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="navbar_icon">
                        {
                            data.name ?
                                <>
                                    <Link to="/profile"><Button className='btn'> <i className="fa fa-user"></i></Button></Link>
                                    <Link to="/wishlist"> <Button className='btn'> <i className="far fa-heart"></i></Button></Link>
                                    <Link to="/tocart"><Button className='btn'> <i className='fas fa-shopping-bag'></i>({carts.length})</Button></Link>
                                </>
                                :
                                <Link to="/login"><Button className='btn'> <i className="fa fa-user"></i></Button></Link>
                        }
                        <Button className='btn'> <i className="fa fa-search" onClick={() => {
                            setBool(!bool)
                        }}></i></Button>
                        {
                            bool ?
                                <input placeholder="Search ..." className="inserach"></input> : ''
                        }
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )

}

export default Navbar;

