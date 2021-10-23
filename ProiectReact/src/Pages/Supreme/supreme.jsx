import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import Product from "../../Components/Product/product";
import { supremeData } from "../../Components/Product/supremeData";
import Meniu from "../../Components/Meniu/meniu";
import Footer from "../../Components/Footer/footer";
import Informatii from "../../Components/Informatii/info";
import "./supreme.css"
import '../Styles/global.css'

function Supreme(){

    return (
      <div>
        <Meniu />
        <Informatii />
        <h1 className="title">Supreme</h1>
        <Product myObj={supremeData}/>
        <div className="numar">
          <p >{supremeData.length} Products</p>
        </div>
        <Footer />
      </div>
    )
  }




ReactDOM.render(
  <React.StrictMode>
    <Supreme />
  </React.StrictMode>,
  document.getElementById('root')
)