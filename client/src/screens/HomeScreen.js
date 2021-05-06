import React from 'react';
import { Link } from 'react-router-dom';
import Newest from "./Newest";
import { FaShippingFast } from 'react-icons/fa';
import { FaBoxOpen } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
export default function HomeScreen() {
  return (
   <div className="home">
        <div className="hero">
      <div className="hero-content d-flex container">
        <div className="left_hero">
          <span className="subtitle">BECOME SELLER WITH US</span>
          <h1 className="title">
            <span className="color">Sign In <br />
              Create your Shop</span><br />
            Add your products <br />
            And sell them online
          </h1>
          <p  className="btn_hero"><Link to="/profile" >CREATE YOUR SHOP</Link> </p>
        </div>

        <div className="right_hero">
          <img src="../../uploads/hero.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="section ">
    <div className="service-center container">
      <div className="service">
        <span className="icon"><FaShippingFast/></span>
        <h4>Free Shipping</h4>
        <span className="text">Capped at 100DT per order</span>
      </div>

      <div className="service">
        <span className="icon"><FaBoxOpen/></span>
        <h4>14-Day Returns</h4>
        <span className="text">Shop with confidence</span>
      </div>

      <div className="service">
        <span className="icon"><FaHeadphonesAlt/></span>
        <h4>24/7 Support</h4>
        <span className="text">Delivered to your door</span>
      </div>
    </div>
  </div>
    <div className="section "><Newest/></div>
    <div className="section">
    <div className="title">
      <h1><span>Shop By</span> Categories</h1>
    </div>
    <div className="cat container">
      <div className="item item-1">
        <img src="../../uploads/fashion.jpg" alt="" />
      </div>
      <div className="item item-2">
        <img src="../../uploads/tech.jpg" alt="" />
      </div>
      <div className="item item-3">
        <img src="../../uploads/craft.jpg" alt="" />
      </div>
      <div className="item item-4">
        <img src="../../uploads/cosmetics.png" alt="" />
      </div>
    </div>
  </div>
  <div className="section container">
    <div className="">
      <div className="title">
      <h1 > <span>Subscribe</span> To Our Newsletter </h1>
      </div>
    <div className="col-2">
    <p>Subscribe to our newsletter and be informed about all discounts on the website products </p>
    </div>
    <div className=" col-2 input-group">
         <input type="text" placeholder="Enter your email"/>
          <button>Subscribe</button>
    </div>
    </div>
  </div>
  <div className="section"></div>
 
    </div>
  )
}
