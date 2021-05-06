import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
export default function ProductsScreen (props) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products,} = productList;
    const { pageNumber = 1 } = useParams();
  
    useEffect(() => {
        dispatch(listProducts({ pageNumber }));
    }, [dispatch,pageNumber,]);
    return(
        <>
        <div className=" all-products">
      <div>
      <Categories/>
    </div>
    <div class="top container">
            <h1>All Products</h1>
        </div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                <div className="product-center container">
                    {products.map((product) => (
                       
                        <Product product={product} />
                        
                         ))}
</div>
                </>
            )}
            </div>
            <div className="section"></div>
</>
    );
}