import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBox.css';
export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form  onSubmit={submitHandler}>
  

  <div className="search">
           
  <select className="selec" onChange={(e) => { props.history.push(`/search/category/${e.target.value}`)}}>
       <option value="">All categories</option>
       <option value="Woman" >Woman</option>
       <option value="kids">kids</option>
       <option value="Accessoires">Accessoires</option>
       <option value="Man">Man</option>
     </select>
      <input type="text" className="rech" placeholder="Search Products Here..." onChange={(e) => setName(e.target.value)}/>
      <button type="submit" className="butt"><BsSearch className="iconss"/></button>
  </div>
      

    </form>
  );
}