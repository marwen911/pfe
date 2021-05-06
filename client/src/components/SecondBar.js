import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './SecondBar.css'
export default function SecondBar() {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 150 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
    return(
        <div className={navbarClasses.join(" ")}>
         <nav >
           <ul>
           <li
          >
            <Dropdown />
          </li>
             <li><Link className="navText" to="/">Home</Link></li>
             <li><Link className="navText" to="/sellers">Shops</Link></li>
             <li><Link className="navText" to="/productslist">Products </Link></li>
             <li><Link className="navText">
               
               </Link></li>
           </ul>

         </nav>
       </div>  
    )
}
