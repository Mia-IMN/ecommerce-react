// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import Pictures from './Group525.png';
console.log(Pictures)

const Navbar = () => {
    return (
        <div className="Navbar">
                <p className="e-comm"><img src={Pictures} className="logo" /><pre><span>  E-Comm</span></pre></p>
                <li className="home">HOME</li>
                <li>ABOUT</li>
                <li>BAGS</li>
                <li>SNEAKERS</li>
                <li>BELTS</li>
                <li className="contact">CONTACT</li>
        </div>
    )
}

export default Navbar
