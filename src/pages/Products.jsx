// Products.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import all_product from "../Components/Assets/all_product(2)";
import "./CSS/Products.css";
import star_icon from "../Components/Assets/star_icon.png";
import star_dull_icon from "../Components/Assets/star_dull_icon.png";

const Products = ({ addToCart }) => {
  const { productId } = useParams();
  const product = all_product[productId - 1];

  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    localStorage.setItem("selectedSize", selectedSize);
  }, [selectedSize]);

  if (!product) {
    return <p className="not-found">Product not found</p>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, selectedSize }); // Include size when adding to cart
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdiplay-img-list">
          <img src={product.imgSrc} alt="" />
          <img src={product.imgSrc} alt="" />
          <img src={product.imgSrc} alt="" />
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="productdiplay-img">
          <img src={product.imgSrc} alt="" className="prodductdisplay-main-img" />
        </div>
        <div className="productdiplay-right">
          <h1>{product.title}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdiplay-right-price-old">${product.old_price}</div>
            <div className="productdiplay-right-price-new">${product.price}</div>
          </div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed
            aspernatur exercitationem! Est debitis placeat quas cum temporibus
            eum aliquam amet sequi, porro sunt beatae nisi repudiandae non.
            Illo, veniam.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div onClick={() => handleSizeClick("S")} className={selectedSize === "S" ? "selected" : ""}>
                S
              </div>
              <div onClick={() => handleSizeClick("M")} className={selectedSize === "M" ? "selected" : ""}>
                M
              </div>
              <div onClick={() => handleSizeClick("L")} className={selectedSize === "L" ? "selected" : ""}>
                L
              </div>
              <div onClick={() => handleSizeClick("XL")} className={selectedSize === "XL" ? "selected" : ""}>
                XL
              </div>
              <div onClick={() => handleSizeClick("XXL")} className={selectedSize === "XXL" ? "selected" : ""}>
                XXL
              </div>
            </div>
          </div>
          <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
