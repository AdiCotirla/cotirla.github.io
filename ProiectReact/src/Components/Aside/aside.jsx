import React, { Component } from 'react';
import './aside.css'
class Aside extends Component {
    render() {
        return(
            <aside className="nav-list">
                <a href="http://www.facebook.com"><img className="facebook"src="../src/assets/tel.png" /></a>
                <a href="http://https://adicotirla.github.io/pages/contact/contact.html"><img className="Contact" src="../src/assets/mail.svg" /></a>
                <a href="http://www.instagram.com"><img className="insta" src="../src/assets/follow.png" /></a>
            </aside>
        )
    }
}



export default Aside