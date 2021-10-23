import React from 'react'
import  ReactDOM  from 'react-dom'
import Meniu from '../../Components/Meniu/meniu'
import Informatii from '../../Components/Informatii/info'
import Footer from '../../Components/Footer/footer'
import "../../Components/Category/category.css"
import Product from '../../Components/Product/product'
import { offwhiteData } from '../OffWhite/offwhiteData'
import { bapeData } from '../Bape/bapeData'
import { supremeData } from '../../Components/Product/supremeData'


function Brands (props){
    const Brands = [ ...props.supremeData, ...props.bapeData, ...props.offwhiteData]
    return(
        <div>
        <Meniu/>
        <Informatii/>
       <Product myObj= {Brands}/>
        <Footer/>
        </div>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <Brands offwhiteData={offwhiteData} bapeData={bapeData} supremeData={supremeData}/>
    </React.StrictMode>,
    document.getElementById('root')
)