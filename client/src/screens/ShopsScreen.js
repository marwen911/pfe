import React, { useEffect } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import ShopCard from '../components/ShopCard';
import { listSellers } from '../actions/userActions';


export default function ShopsScreen () {
    const dispatch = useDispatch();
    const userSellersList = useSelector((state) => state.userSellersList);
    const {
      loading: loadingSellers,
      error: errorSellers,
      users: sellers,
    } = userSellersList;
  
    useEffect(() => {
      dispatch(listSellers());
    }, [dispatch]);
    return(
        <div className="shopsScreen">
            <h2>Discover our Shops</h2>
            <br/><br/>
            <div >
            {loadingSellers ? (
                <LoadingBox></LoadingBox>
            ) : errorSellers ? (
                <MessageBox variant="danger">{errorSellers}</MessageBox>
            ) : (
                <>
                {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
                <div className="grid_container">
                    {sellers.map((seller) => (
                   <ShopCard key={seller._id} seller={seller}></ShopCard>
                         ))}
                </div>
                </>
            )

            }
            </div>
        </div>
    )
}