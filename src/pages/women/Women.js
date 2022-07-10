import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../products/Product";

function Women() {
    const params = useParams()
    const { products } = useSelector(state => state.productData)
    const [arr, setArr] = useState([])
    useEffect(() => {
        setArr([...products.filter(e => e.category.toLowerCase() == params.name)])
    }, [params])
    return (
        <div>
            <Navbar/>
            <h1 className="catName">{params.name}</h1>
            <div className="image-grid">

                {
                    arr?.map((el, index) => {
                        return (
                            <Product product={el} key={el.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Women; 