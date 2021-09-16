import React from 'react'
import LittleNav from './LittleNav'
import Navbar from './Navbar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import Image1 from './shoey.png';
import Footer from './Footer';
import Collection from './Collection';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Collection2 from './Collection2';

const arrowdown = <FontAwesomeIcon icon={faCaretDown} />


console.log(Image1)

const Hotdeals = () => {
    return (
        <div className="Hotdeals">
            <LittleNav />
            <div className="Hotdeals-Collection">
                <div className="Hotdeals-items2">
                    <div className="Hotdeals-items">
                        <h1>Hot Deals</h1>
                        <p>Nike <span>2</span></p>
                        <p>Airmax <span>48</span></p>
                        <p>Nike <span>14</span></p>
                        <p>Adidas <span>15</span></p>
                        <p>Vans <span>23</span></p>
                        <p>All Stars <span>1</span></p>
                        <p>Adidas <span>95</span></p>
                    </div>
                    <div className="Hotdeals-items pricerange">
                        <h1>PRICES</h1>
                        <p>Ranger: <span>$13.99 - $25.99</span></p>
                    </div>
                    <div className="Hotdeals-items brands">
                        <h1>BRAND</h1>
                        <p>Nike <span>20</span></p>
                        <p>Airmax <span>93</span></p>
                        <p>Siemens <span>91</span></p>
                        <p>Nike <span>99</span></p>
                        <p>Adidas <span>90</span></p>
                        <p>Airmax <span>79</span></p>
                        <p>Siemens <span>91</span></p>
                    </div>
                    <div className="Hotdeals-items more">
                        <h1>MORE</h1>
                    </div>


                </div>
                <div className="Hotdeals-rightcorner">
                    <div className="Hotdeals-bluebg">
                        <div className="Hotdeals-writeups">
                            <h3>Adidas Men Running <br /> Sneakers </h3>
                            <p>Performance and designn. Taken right to the edge.</p>
                            <h6><Link to="/">SHOP NOW</Link></h6>
                        </div>
                        <div className="Hotdeals-shoey">
                            <img src={Image1} alt="cannot display" className="Hotdeals-giantshoe" />
                        </div>
                    </div>
                    <div className="sortby">
                        <div className="sortby-items">
                            <p className="counter">13 Items</p>
                            <p>Sort By</p>
                            <pre>Name   {arrowdown}</pre>
                            <p>Show</p>
                            <pre className="counter2">12   {arrowdown}</pre>
                        </div>

                    </div>

                    <Collection2 />
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Hotdeals
