import React, { Component } from "react";
import { supremeData } from "./supremeData";
import "./product.css"
class Product extends Component {
    render() 
    {
        return (
            <div className="product-list">
                {supremeData.map((produse) => {
                    return (
                        <div className="produse">
                         <><img src={produse.image} />
                         <h1>{produse.name}</h1>
                         <h2>{produse.price}</h2></>
                         </div>
                    )
                })}
            </div>
        )
    }
}


export default Product