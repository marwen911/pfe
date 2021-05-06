import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories } from '../actions/productActions';
import './Footer.css'
import {SiTwitter,SiFacebook,SiInstagram,SiLinkedin} from 'react-icons/si'


export default function Footer() {
	const dispatch = useDispatch();
	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
	  loading: loadingCategories,
	  categories,
	} = productCategoryList;
	useEffect(() => {
	  dispatch(listProductCategories());
	}, [dispatch]);
    return (
        <div className="footer">
            <div className="container-footer">
  	 	<div className="row-footer">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><p>about us</p></li>
  	 				<li><p >our services</p></li>
  	 				<li><p >privacy policy</p></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><p >shipping</p></li>
  	 				<li><p >returns</p></li>
					<li><p><Link className="Text" to="/contact">Contact Us</Link></p></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
				   {loadingCategories  ? <li>No Categories found</li>: ( 
              categories.map((c) => {
                  return (
                      <li><p><Link className="Text" to={`/search/category/${c}`}>{c}</Link></p></li>
                  )
              })
            )}
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<p><SiFacebook/></p>
  	 				<p ><SiTwitter/></p>
  	 				<p ><SiInstagram/></p>
  	 				<p ><SiLinkedin/></p>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
            
        </div>
    )
}