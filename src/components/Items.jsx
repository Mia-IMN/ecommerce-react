import React from 'react'
import Image2 from './image Product.png';
import Image0 from './imageProduct(2).png';

console.log(Image0, Image2)

const Items = () => {
    return (
        <div>
            <div className="littleNav">
                <p className="active">Cart</p>
            </div>
            <div className="cartgrid">
                <p className="product spacing-top">PRODUCT</p>
                <p className="spacing-top">PRICE</p>
                <p className="spacing-top">QTY</p>
                <p className="spacing-top">UNIT PRICE</p>
                <div className="bottom spacing">
                    <p><span>x</span></p>
                    <img src={Image0} alt="" />
                    <p>Nike Airmax 270 React</p>
                </div>
                <p className="spacing ">$998</p>
                <div className="leftcorner spacing height" >
                    <p>-</p>
                    <p><span>2</span></p>
                    <p>+</p>
                </div>
                <p className="spacing ">$498</p>
                <div className="bottom spacing">
                    <p><span>x</span></p>
                    <img src={Image2} alt="" />
                    <p>Nike Airmax 270 React</p>
                </div>
                <p className="spacing ">$998</p>
                <div className="leftcorner spacing height" >
                    <p>-</p>
                    <p><span>2</span></p>
                    <p>+</p>
                </div>
                <p className="spacing ">$498</p>
            </div>
            <div className="cartflex">
                <div className="search voucher">
                    <input type="text" name="" id="" placeholder="Voucher Code" />
                    <button>Redeem</button>
                </div>
                <div className="secondrow-cont salestotal">
                    <p>Subtotal <span>$998</span></p>
                    <p>Shipping fee <span>$20</span></p>
                    <p>Coupon <span>No</span></p>
                    <p className="total">TOTAL <span>$118</span></p>
                    <button>Check out</button>
                </div>

            </div>
        </div>
    )
}

export default Items
{/* <img src={Image2} alt="" /> */ }
