import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Link, Route } from 'react-router-dom';
import { signout } from '../actions/userActions';
import SearchBox from './SearchBox';
import { AiFillShopping } from 'react-icons/ai';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai'
import './TopBar.css';
import './Dropdown.css';
export default function TopBar () {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    }
    return(

      <>
      <div className="topnav">
        <div className="right">
          <span className="top_span">Mondou@gmail.com</span>
          <span className="top_span">|</span>
          <span className="top_span">+216 55 555 555</span>
        </div>
        <div className="left">
        <span className="top_span">My Account</span>
          <span className="top_span">|</span>
          <span className="top_span">Language</span>
        </div>
      </div>
      <div className="topbar" >
         <div className="brand">
         <Link  className="brand_name" to="/"><AiFillShopping/> Mundo </Link>
         </div>
         <div>
         <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
         </div>
         <div className="right-content">
                <ul>   
                <Link to="/cart" c><li className="user">
         <FaShoppingCart className="icons"/> Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
           </li> </Link>
         {userInfo ? (

                  <div className="dropdown">
                    <li className="login"><Link to="#" ><FaUserAlt className="icons"/> {userInfo.name}</Link></li>
                   <ul className="dropdown-content">
                   <li className="login"> <Link to="/profile" className="user"><FaUserAlt className="icons"/> User Profile</Link> </li>
                  <li className="login"><Link to="#signout" onClick={signoutHandler}>Sign Out</Link></li>
                   </ul>
                  </div>
            ) : (
              <Link to="/signin"><li  className="user"><AiOutlineLogin className="icons"/> Login</li></Link> 
            )} 
                </ul>
             </div>
        </div>
      </>
    )
}