import React, { Component } from 'react';
import './meniu.css'

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
                    <a href="#"><h1>FIRE-<br></br>STOCK</h1></a>
                </div>
                <div className="meniu-dreapta">
                    <ul>
                    <li><a href="#">BAPE</a></li>
                    <li><a href="#">BRANDS</a></li>
                    <li><a href="#">CONTACT US</a></li></ul>
                </div>
            </div>
        )
    }
}


export default Meniu