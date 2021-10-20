import React, { Component } from "react";
import ReactDOM from "react-dom";
import Footer from "../../Components/Footer/footer";
import Informatii from "../../Components/Informatii/info";
import Meniu from "../../Components/Meniu/meniu";
import Product from "../../Components/Product/product";
import {bapeData} from "./bapeData"
import "../Styles/global.css"
class Bape extends Component
{
    render(){
        return(
            <div>
                <Product myObj={bapeData}/>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Meniu/>
        <Informatii/>
        <h1 className="title">BAPE</h1>
      <Bape/>
        <div className="numar">
            <p >{bapeData.length} Products</p>
        </div>
      <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
  )