import React, { Component } from 'react';
import './meniu.css'
import {FaShoppingCart} from 'react-icons/fa'

class Meniu extends Component {
    render() {
        return (
            <div className="container-meniu">
                <div className="meniu-stanga">
                    <ul>
                        <li><a href="../../../../index.html">HOME</a></li>
                        <li> <a href="/src/Pages/Supreme/supreme.html">SUPREME</a></li>
                        <li><a href="/src/Pages/OffWhite/offwhite.html">OFF-WHITE</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <a href="../../../../index.html"><h1>FIRE-<br></br>STOCK</h1></a>
                </div>
                <div className="meniu-dreapta">
                    <ul>
                    <li><a href="/src/Pages/Bape/bape.html">BAPE</a></li>
                    <li><a href="/src/Pages/Brands/brands.html">BRANDS</a></li>
                    <li><a href="#">CONTACT US</a></li></ul>
                </div>
                <a href="/src/Pages/Cart/Cart.html"><FaShoppingCart className="cart"/></a>
            </div>
        )
    }
}


export default Meniu