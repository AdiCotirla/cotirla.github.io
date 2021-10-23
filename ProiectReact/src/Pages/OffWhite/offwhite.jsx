import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from '../../Components/Product/product';
import Footer from '../../Components/Footer/footer';
import Informatii from '../../Components/Informatii/info';
import Meniu from '../../Components/Meniu/meniu';
import { offwhiteData } from './offwhiteData';
import '../Styles/global.css'


function OffWhite() {
    return (
        <div> <Meniu />
            <Informatii />
            <h1 className="title">OFF WHITE</h1>
            <Product myObj={offwhiteData} />
            <div className="numar">
                <p>{offwhiteData.length} Products</p>
            </div>
            <Footer />
        </div>
    )
}





ReactDOM.render(
    <React.StrictMode>
        <OffWhite />
    </React.StrictMode>,
    document.getElementById('root')
)