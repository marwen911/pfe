import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listNewestProducts } from '../actions/productActions';


export default function Newest (props) {
    const dispatch = useDispatch();
    const productNewest = useSelector((state) => state.productNewest);
    const { loading, error, products } = productNewest;
  
    useEffect(() => {
        dispatch(listNewestProducts());
    }, [dispatch]);
    return(
        <div className=" ">
    <div className="title">
            <h1><span>Our Newests</span> Products</h1>
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

    );
}