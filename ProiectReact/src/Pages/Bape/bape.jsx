import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "../../Components/Footer/footer";
import Informatii from "../../Components/Informatii/info";
import Meniu from "../../Components/Meniu/meniu";
import Product from "../../Components/Product/product";
import { bapeData } from "./bapeData"
import "../Styles/global.css"
function Bape(){
        return (
            <div>
                <Meniu />
                <Informatii />
                <h1 className="title">BAPE</h1>
                <Product myObj={bapeData} />
                <div className="numar">
                    <p>{bapeData.length} Products</p>
                </div>
                <Footer />
            </div>
        )
    }
ReactDOM.render(
    <React.StrictMode>
        <Bape />
    </React.StrictMode>,
    document.getElementById('root')
)