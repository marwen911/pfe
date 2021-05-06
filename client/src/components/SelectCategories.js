import React from 'react';

export default function SelectCategories (props) {
    return(
      
      <select className="selec" onChange={(e) => { props.history.push(`/search/category/${e.target.value}`)}}>
       <option value="">All categories</option>
       <option value="Woman" >Woman</option>
       <option value="kids">kids</option>
       <option value="Accessoires">Accessoires</option>
     </select>
 
    )
}