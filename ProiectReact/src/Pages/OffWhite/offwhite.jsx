import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from '../../Components/Product/product';
import Footer from '../../Components/Footer/footer';
import Informatii from '../../Components/Informatii/info';
import Meniu from '../../Components/Meniu/meniu';
import { offwhiteData } from './offwhiteData';
import '../Styles/global.css'


class OffWhite extends Component
{
    render(){
        return(
            <div>
            <Product myObj={offwhiteData}/>
            </div>
        )
    }
}




ReactDOM.render(
    <React.StrictMode>
        <Meniu/>
        <Informatii/>
        <h1 className="title">OFF WHITE</h1>
        <OffWhite/>
        <div className="numar">
            <p >{offwhiteData.length} Products</p>
        </div>
      <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
  )