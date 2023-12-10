// ShopCategory.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import './CSS/ShopCategory.css';

const ShopCategory = ({ category }) => {
  const cardsPerPage = 12;
  const [numberOfCards, setNumberOfCards] = useState(cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setNumberOfCards(cardsPerPage);
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

  const totalPages = Math.ceil(all_product.length / cardsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const cards = Array.from({ length: numberOfCards }, (_, index) => {
    const dataIndex = (currentPage - 1) * cardsPerPage + index;
    const cardInfo = all_product[dataIndex];

    if (!cardInfo) {
      return (
        <div key={index} className="card">
          <p>Card data not available</p>
        </div>
      );
    }

    return (
      <Link to={`/products/${dataIndex + 1}`} key={index} className="card" style={{textDecoration: 'none', }}>
        <div className="imgBox">
          <img src={cardInfo.imgSrc} alt={` ${index}`} className="mouse" />
        </div>
        <div className="contentBox">
          <h3>{cardInfo.title}</h3>
          <h2 className="price">{cardInfo.price}$</h2>
        </div>
      </Link>
    );
  });

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => (
    <span
      key={index}
      className={currentPage === index + 1 ? 'activePage' : 'page'}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </span>
  ));

  return (
    <div>
      <br /><br />
      <div className="display">{cards}</div>
      <div className="pageNumbersContainer">
        <div className="pageNumbers">{pageNumbers}</div>
      </div>
    </div>
  );
};

export default ShopCategory;
