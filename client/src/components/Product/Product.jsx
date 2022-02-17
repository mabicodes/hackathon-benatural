import React from "react";
import "./product.css";
import productImage from "../../assets/img/facial_oil.png";

export const Product = () => {
  return (
    <div className="home">
      <div className="productCartExplicit">
        <div className="productCartInfo">
          <div className="productName"><h2>FACIAL OIL RECOVERY SERUM</h2></div>
          <div className="productCategory"><h3>Product</h3></div>
          <div className="productDescription"><h4>Our hydrating, nutrient filled Facial Recovery Serum has a light consistency for speedy absorption, and infuses detoxifying Super Green extracts of Kale, Spirulina and Parsley. </h4></div>
          <div className="productPrice"><h2>20 usd</h2></div>
          <div className="productContact"><button>Contact</button></div>
        </div>
        <div className="productCartImage">
            <img src={productImage} alt="ProductName" />
        </div>
      </div>
    </div>
  );
};
