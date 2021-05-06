import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import './ShopCard.css';
export default function ShopCard(props) {
  const { seller } = props;
  return (
  <div className="card">
  <Link to={`/seller/${seller._id}`}><img src={seller.seller.coverPicture} alt={seller.seller.shopName} /></Link>
  <h1>{seller.seller.shopName}</h1>
  <p className="title">{seller.seller.description}</p>
  <p><Link to="#"><button className="shopbutton">Add to favorite <AiFillHeart/></button></Link></p>
</div>
  
  );
}