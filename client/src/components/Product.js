import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import './Product.css';
export default function Product(props) {
  const { product } = props;
  return (
    <div className="product">
  <div className="product-header">
  <Link to={`/product/${product._id}`} ><img src={product.image} alt={product.name} /></Link>
  <ul className="icons">
        <Link><span><AiOutlineHeart className="i"/></span></Link>
        <Link to={`/product/${product._id}`} ><span><AiOutlineShoppingCart className="i" /></span></Link>
      </ul>
  </div>
  <div className="product-footer">
  <h1>{product.name}</h1>
  <p className="price">{product.price}DT</p>

  </div>
   </div>
  );
}


/*  <div className="card">
  <Link to={`/product/${product._id}`} ><img src={product.image} alt={product.name} /></Link>
  <h1>{product.name}</h1>
  <p className="price">{product.price}DT</p>
  <p>{product.description}</p>
  <p><button><Link to={`/product/${product._id}`} >View Details</Link></button></p>
   </div>*/
