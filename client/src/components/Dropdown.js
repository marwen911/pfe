import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories } from '../actions/productActions';
import './Dropdown.css'
export default function Dropdown() {
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
    <>
        <div className="dropdown">
           <span className="dropdown-name">Categories</span>
           <div className="dropdown-content">
        {loadingCategories  ? <li>No Categories found</li>: ( 
              categories.map((c) => {
                  return (
                      <p>                    <Link
                      to={`/search/category/${c}`}
                    >
                      {c}
                    </Link></p>
                  )
              })
            )}
            </div>
            </div>
    </>
  );
}

