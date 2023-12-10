// Checkout.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; 
const Checkout = () => {
  const [creditCard, setCreditCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    
  
    
    navigate('/thanks');
  };

  return (
    <div className="body"><br />
    <div className="checkout-container">
      <h2>Checkout</h2><br />
      <form>
        <label>
          Credit Card Number:
          <input type="text" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
        </label>
        <br />
        <label>
          CVC:
          <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handlePayment}>
          Pay
        </button>
      </form>
    </div>
    </div>
  );
};

export default Checkout;
