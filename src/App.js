// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Products from './pages/Products';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './Components/login/SignUp';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import Checkout from './Components/Chekout/Checkout';
import Thanks from './Components/thanks/Thanks';
import { UserProvider } from './Components/Profile/UserContex';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id && item.size === product.size);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const adjustQuantity = (productId, action) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      if (action === 'increase') {
        updatedCartItems[itemIndex].quantity += 1;
      } else if (action === 'decrease') {
        if (updatedCartItems[itemIndex].quantity > 1) {
          updatedCartItems[itemIndex].quantity -= 1;
        } else {
          updatedCartItems.splice(itemIndex, 1);
        }
      }
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <div>
      <Router>
      <UserProvider>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/products/:productId' element={<Products addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} /> 
          <Route path='/profile' element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
        <hr className="section-divider" />
        <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
