import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Product from "../../Components/Product/product";
import { supremeData } from "../../Components/Product/supremeData";
import Meniu from "../../Components/Meniu/meniu";
import "./supreme.css"
import Footer from "../../Components/Footer/footer";
import Informatii from "../../Components/Informatii/info";


class Supreme extends Component
{
    render(){
        return(
            <div>
            <Product produse = {supremeData}/>
            </div>
        )
    }
}



ReactDOM.render(
    <React.StrictMode>
        <Meniu/>
        <Informatii/>
        <h1 className="title">Supreme</h1>
      <Supreme/>
        <div className="numar">
            <p >{supremeData.length} Products</p>
        </div>
      <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
  )