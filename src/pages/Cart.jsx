// Cart.js
import React from 'react';
import { useUser } from '../Components/Profile/UserContex';
import { useNavigate } from 'react-router-dom';
import './CSS/Cart.css';

const Cart = ({ cartItems, adjustQuantity }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      alert('You need to sign in first.');
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cardcart">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>New Price: ${item.price}</p>
                {/* Display size from the cart item */}
                <p>Size: {item.selectedSize}</p>
                <div className="quantity-adjust">
                  <button className="decrease" onClick={() => adjustQuantity(item.id, 'decrease')}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="increase rb" onClick={() => adjustQuantity(item.id, 'increase')}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="checkout-button-container">
            <p>Total: ${calculateTotal().toFixed(2)}</p>
            <br />
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
