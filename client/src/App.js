import React  from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import OrderListSeller from './screens/OrderListSeller';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchScreen from './screens/SearchScreen';
import UserListScreen from './screens/UserListScreen';
import ShopScreen from './screens/ShopScreen';
import ShopsScreen from './screens/ShopsScreen';
import ProductsScreen from "./screens/ProductsScreen";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Newest from './screens/Newest';
import TopProducts from './components/TopProducts';
import ContactScreen from './screens/ContactScreen';


function App() {
  return (
    <BrowserRouter>
    <header>
      <Navbar/>
    </header>
        <main className="content">
          <Route path="/sellers" component={ShopsScreen}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route path="/orderSeller" component={OrderListSeller}></Route>
          <Route path="/createshop" component={ShopScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <Route
          path="/productslist"
          component={ProductsScreen}>
          </Route>
          <Route
          path="/productslist/pageNumber/:pageNumber"
          component={ProductsScreen}
          exact>
          </Route>
          <Route path="/newestproducts" 
          component={Newest}></Route>
          <Route path="/topproducts" component={TopProducts}></Route>
          <Route path="/contact" component={ContactScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer ><Footer/></footer>
    </BrowserRouter>
  );
}

export default App;
/*  <div className="secondbar">
         <nav className="navbar">
           <ul>
           <li
          >
            <Dropdown />
          </li>
             <li><Link className="navText" to="/">Home</Link></li>
             <li><Link className="navText" to="/sellers">Shops</Link></li>
             <li><Link className="navText" to="/productslist">Products </Link></li>
             <li><Link className="navText">About</Link></li>
           </ul>

         </nav>
       </div>       */