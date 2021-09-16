import React from 'react'
import LIttleNav2 from './LIttleNav2';
import Image1 from './image Product (1).png';
import Image2 from './image Product.png';
import Image3 from './image Product (2).png';
import Image4 from './image Product (3).png';
import Image5 from './Product Picture02.png';
import Image6 from './Product Picture03.png';
import Image7 from './Product Picture01.png';
import Image0 from './imageProduct(2).png';
import Image8 from './star copy 2.png';
import Image9 from './star.png';
import Image10 from './label.png';
import Image11 from './overlay.png';
import Image12 from './images/Ellipse 1 copy 2.png';
import Image13 from './images/Ellipse 1 copy 3.png';
import Image14 from './images/Ellipse 1 copy 4.png';
import Image15 from './images/Group 24.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Cart = <FontAwesomeIcon icon={faShoppingCart} />
const Heart = <FontAwesomeIcon icon={faHeart} />
const CaretDown = <FontAwesomeIcon icon={ faCaretDown}/>
console.log(Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15)

const Productpage = () => {
    return (
        <div className="Productpage">
            <LIttleNav2 />
            <div className="Productpage-body">
                <div className="leftside">
                    <div className="top">
                        <img src={Image0} alt="" />
                    </div>
                    <div className="bottom">
                        <img src={Image5} alt="" />
                        <img src={Image6} alt="" />
                        <img src={Image0} alt="" />
                        <img src={Image7} alt="" />
                    </div>
                </div>
                <div className="middleside">
                    <h3>Nike Airmax 270 React</h3>
                    <div className="reviews">
                    <div className="stars rev-stars">
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image8} alt="" />
                    </div>
                    <p className="zero-rev">0 reviews</p>
                    <p className="submit-review">Submit a review</p>
                    </div>
                    <div className="secondrow">
                        <p className="price">$299.43</p>
                        <p className="former">$534.33</p>
                        <p className="off">24% Off</p>
                    </div>
                    <div className="secondrow-cont">
                        <p>Availability <span>In Stock</span></p>
                        <p>Category <span>Accessories</span></p>
                        <p>Free Shipping</p>
                    </div>
                    <div className="select-colour">
                        <p>Select colour:</p>
                        <img src={Image15} className="firstcolour" />
                        <img src={Image12} alt="" />
                        <img src={Image13} alt="" />
                        <img src={Image14} alt="" />
                    </div>
                    <div className="size">
                        <p>Size</p>
                        <button>XS { CaretDown}</button>
                    </div>
                    <div className="addtocart">
                        <div className="leftcorner">
                            <p>-</p>
                            <p><span>2</span></p>
                            <p>+</p>
                        </div>
                        <div className="add2cart">
                            { Cart }
                            <p>Add to Cart</p>
                        </div>
                        <div className="rightcorner">
                            { Heart } 
                        </div>
                    </div>
                    <div className="socials">
                        <div className="facebook">
                            <p>Share on Facebook</p>
                        </div>
                        <div className="facebook twitter">
                            <p>Share on Twitter</p>
                        </div>
                    </div>
                </div>
                <div className="rightside">
                    <h6>BEST SELLER</h6>
                    <img src={Image2} alt="" />
                    <div className="bestseller-about">
                    <div className="stars rev-stars rightside-review">
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image9} alt="" />
                        <img src={Image8} alt="" />
                    </div>
                    <div className="figures">
                        <p>$499</p>
                        <p><span>$599</span></p>
                    </div>
                    </div>
 
                </div>
                <div className="product-info">
                        <div className="headings">
                            <p className="active">Product Information</p>
                            <p>Reviews 0</p>
                        </div>
                        <div className="heading-info">
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Productpage
