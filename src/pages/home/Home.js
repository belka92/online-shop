import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import Product from "../products/Product";
import "./Home.css"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
    const arr = useSelector(st=>st.catData.arr)
    const { products } = useSelector(state => state.productData)
   

    return (
        <>
        <Navbar/>
            <div className="header_div"></div>
                <div className="outerDiv">
                    {
                        arr?.map((e) => {
                            return (
                                <div key={e.id} className="innerDiv" style={{background:"url(http://localhost:3000/"+e.img+")", backgroundRepeat: 'no-repeat',
                                backgroundSize: 'contain', backgroundPosition:"center", opacity:"30"}}>
                                    <h1 syle={{backgroundColor: '#FFFFFF50'}}>{e.name}</h1>
                                    <Link to={{pathname:"/cat/"+e.link}}>See all</Link>
                                </div>
                            )
                        })
                    }
                </div>
            <div className="image-grid">
                {
                    products?.map((el, index) => {
                        return (
                            <Product product={el} key={el.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;