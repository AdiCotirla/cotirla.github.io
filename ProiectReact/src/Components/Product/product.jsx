import React, { Component, useState , useEffect} from "react";
import "./product.css"
import { Orders } from "../../Pages/Cart/CartData";
function Product (props) {
    
        const [cart , setCart] = useState([])
        let orders = {...Orders}
        
        const addToCartFunction = (id , produse) => {
            orders = [...cart]
            setCart(orders)
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