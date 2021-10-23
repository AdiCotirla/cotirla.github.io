import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import Footer from '../../Components/Footer/footer'
import Informatii from '../../Components/Informatii/info'
import Meniu from '../../Components/Meniu/meniu'
import { supremeData } from '../../Components/Product/supremeData'
import { offwhiteData } from '../OffWhite/offwhiteData'
import { bapeData } from '../Bape/bapeData'
import "./Cart.css"


function Cart(props) {
    const data = [...props.supremeData, ...props.offwhiteData, ...props.bapeData]

    return (
        <div>
            <Meniu />
            <Informatii />
            <div className="cart-title">
                <h1 >THIS IS YOU SHOPING CART</h1>
            </div>

            <div className="cart-items">
                {data.filter(item => item.cart === true).map(filteredItems => (
                    <div className="cart-item">
                        <img src={filteredItems.image} />
                        <h1>{filteredItems.name}</h1>
                        <h2>{filteredItems.price}</h2>
                    </div>
                ))}</div>
            <Footer />
        </div>
    )
}



ReactDOM.render(
    <React.StrictMode>
        <Cart supremeData={supremeData} offwhiteData={offwhiteData} bapeData={bapeData} />
    </React.StrictMode>,
    document.getElementById('root')
)