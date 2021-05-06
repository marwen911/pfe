  
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ShopScreen() {
  let history = useHistory();
    const [shopName, setShopName] = useState('');
    const [coverPicture, setCoverPicture] = useState('');
    const [description, setDescription] = useState('');
    const [adress, setAdress] = useState('');
    const [tel, setTel] = useState('');
    const [isSeller, setIsSeller] = useState(false);
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
      success: successUpdate,
      error: errorUpdate,
      loading: loadingUpdate,
    } = userUpdateProfile;
    const dispatch = useDispatch();
    useEffect(() => {
      if (!user) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(detailsUser(userInfo._id));
      } else {
        setIsSeller(true);
        setShopName(shopName);
        setCoverPicture(coverPicture);
        setDescription(description);
        setAdress(adress);
        setTel(tel);
      }
    }, [dispatch, userInfo._id, user]);
    const SubmitHandler = (e) => {
      
      e.preventDefault();
      // dispatch update profile
        dispatch(
          updateUserProfile({
            userId: user._id,
            isSeller,
            shopName,
            coverPicture,
            description,
            adress,
            tel,
          })
        );
        

        
    };
    

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append('image', file);
      setLoadingUpload(true);
      try {
        const { data } = await Axios.post('/api/uploads', bodyFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setCoverPicture(data);
        setLoadingUpload(false);
      } catch (error) {
        setErrorUpload(error.message);
        setLoadingUpload(false);
      }
    };
    return (
      <div>
        <form className="form" onSubmit={SubmitHandler}>
          <div>
            <h1>Create your Shop</h1>
          </div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
               history.push("/profile")
              )}
                              <>
                  <div>
                    <label htmlFor="shopName">Shop Name</label>
                    <input
                      id="shopName"
                      type="text"
                      placeholder="Enter Shop Name"
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                    ></input>
                  </div>
                 

                    <div>
                      <label htmlFor="imageFile">Cover Picture</label>
                      <input
                        type="file"
                        id="coverPicture"
                        label="Enter Cover Picture"
                        onChange={uploadFileHandler}
                      ></input>
                        {loadingUpload && <LoadingBox></LoadingBox>}
                        {errorUpload && (
                        <MessageBox variant="danger">{errorUpload}</MessageBox>
                         )}
                    </div>

                  <div>
                    <label htmlFor="description">Seller Description</label>
                    <input
                      id="description"
                      type="text"
                      placeholder="Enter Shop Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="adress">Seller Adress</label>
                    <input
                      id="adress"
                      type="text"
                      placeholder="Enter Shop Adress"
                      value={adress}
                      onChange={(e) => setAdress(e.target.value)}
                    ></input>
                  </div>
                    <div>
                    <label htmlFor="tel">Seller Tel</label>
                    <input
                      id="tel"
                      type="text"
                      placeholder="Enter Shop tel"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    ></input>
                  </div>
                </>
              <div>
                <label />
                <button className="primary" type="submit"> 
                  Create your shop
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    );
  }