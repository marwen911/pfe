import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

export default function Categories (props) {
    return(
<div class="grid-container">
  <div><Link to="/search/category/Woman">Woman</Link></div>
  <div><Link to="/search/category/Accessoires">Accessoires</Link></div>
  <div><Link to="/search/category/Kids">kids</Link></div>  
  <div><Link to="/search/category/Man">Man</Link></div>
  <div><Link to="/search/category/High-Tech">High-Tech</Link></div>
  <div><Link to="/search/category/Handmade-Food">Handmade-Food</Link></div>
  <div><Link to="/search/category/Handmade-Craft">Handmade-Craft</Link></div>
  <div><Link to="/search/category/Electro">Electro</Link></div>
  <div><Link to="/search/category/Cosmetics">Cosmetics</Link></div>
  
</div>
    )
}