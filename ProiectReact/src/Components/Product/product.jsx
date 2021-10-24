import React, { Component, useState , useEffect} from "react";
import "./product.css"
function Product (props) {
    
        const [cart , setCart] = useState(true)

        const addToCartFunction = (id , produse) => {
            setCart(produse.cart = true)
            console.log(produse)
        }
        const Lista = [...props.myObj]
        return (
            <div className="product-list">
                            {Lista.map((produse)=>{
                                return(
                                    <div className="produse" key={produse.id}>
                                    <img src={produse.image} />
                                    <h1>{produse.name}</h1>
                                    <h2>{produse.price}</h2>
                                    <button onClick={()=> addToCartFunction(produse.id ,produse)} className="button-product">ADD TO CART</button>
                                    </div>              
                                )
                            })}
                         
            </div>
        )
    }


export default Product