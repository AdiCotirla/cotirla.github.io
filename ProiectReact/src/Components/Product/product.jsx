import React, { Component } from "react";
import "./product.css"
class Product extends Component {
    constructor(props)
    {
        super(props)
        this.Lista = [...this.props.myObj]
        console.log(this.Lista)
    }
    render() 
    {
        return (
            <div className="product-list">
                            {this.Lista.map((produse)=>{
                                return(
                                    <div className="produse">
                                    <img src={produse.image} />
                                    <h1>{produse.name}</h1>
                                    <h2>{produse.price}</h2>
                                    </div>              
                                )

                            })}
                         
            </div>
        )
    }
}


export default Product