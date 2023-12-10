// Popular.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';
import all_product from '../Assets/all_product';

const Popular = () => {
  const [numberOfCards, setNumberOfCards] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setNumberOfCards(4);
      } else {
        setNumberOfCards(1);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const cards = Array.from({ length: numberOfCards }, (_, index) => {
    const cardInfo = all_product[index];

    if (!cardInfo) {
      return (
        <div key={index} className="card">
          <p>Card data not available</p>
        </div>
      );
    }

    return (
      
      <Link to={`/products/${index + 1}`} key={index} className="card" style={{textDecoration: 'none'}}>
        <div className='textstyle'>
        <div className="imgBox">
          <img src={cardInfo.imgSrc} alt={`${index}`} className="mouse" />
        </div>
        <div className="contentBox">
          <h3 className="product-title" >{cardInfo.title}</h3>
          <h2 className="price">{cardInfo.price}$</h2>
        </div></div>
      </Link>
    );
  });

  return (
    <div className='border'>
      <p className="product-title-heading1">Popular</p>
      <div className="display">{cards}</div>
    </div>
    
  );
};

export default Popular;
