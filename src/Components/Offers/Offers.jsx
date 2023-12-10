import React from "react";
import "./Offers.css";
import OFFERS from "../Assets/OFFERS.svg";
import best from "../Assets/clothes/best.jpg";

const Offers = () => {
  return (
    <div className="fashion-container3">
      <div className="fashion-container2">
        <div className="fashion-container1">
          <img
            src={OFFERS}
            className="image-container img-content-8b357e25"
            alt="Offers"
          />
        </div>
        <div className="fashion-container">
          <p className="fashion-heading">Best Fashion Since 2023</p>
          <p className="fashion-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
          </p>
        </div>
      </div>
      <div className="fashion-stats-container">
        
          <img src={best} alt="img" className="your-image-class"/>
        
        <div className="text-stats-container">
          <div className="flex-column-container">
            <p className="founding-year-text">2023</p>
            <p className="founded-year">CosmicWear Founded</p>
          </div>
          <div className="divider"></div>
          <div className="flex-column-container">
            <p className="sales-count">
              <span className="highlighted-number">8900</span>
              <span className="total-sum-label">+</span>
            </p>
            <p className="product-sold">Product Sold</p>
          </div>
          <div className="divider"></div>
          <div className="flex-column-container">
            <p className="review-count-container">
              <span className="highlighted-number">3105</span>
              <span className="total-sum-label">+</span>
            </p>
            <p className="best-reviews">Best Reviews</p>
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default Offers;
