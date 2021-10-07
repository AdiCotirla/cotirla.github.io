import React, { Component } from 'react';
import './App.css'
import Aside from './Components/Aside/aside';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu-container">
          <h1>Adrian Cotîrlă</h1>
          <p>Sportsman/Junior Developer</p>
          <div className="button-arrow">
            <a href="./src/Pages/About/about.html"><button>About Me</button></a>
            <img src="./src/assets/arrow.png" />
          </div>
        </div>
        <Aside></Aside>
      </div>
    )
  }
}

export default App
