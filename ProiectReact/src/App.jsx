import React, { Component } from 'react';
import './App.css'
import Meniu from './Components/Meniu/meniu';
import ImageSlider from './Components/Slider/slider';
import { SliderData } from './Components/Slider/SliderData';
import Category from './Components/Category/category';
import { Categories } from './Components/Category/CategoryData';
import Footer from './Components/Footer/footer';
import Informatii from './Components/Informatii/info';
class App extends Component {
  render() {
    return (
      <div>
        <Meniu/>
        <Informatii/>
        <ImageSlider slides = {SliderData}/>
        <Category category = {Categories}/>
        <Footer/>
        </div>
    )
  }
}


export default App
