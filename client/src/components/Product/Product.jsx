import React from "react";
import "./product.css";
import star from "../../assets/img/star-solid.svg"
import halfstar from "../../assets/img/star-half-stroke-solid.svg"

import { ProductList } from "../../assets/Data/ProductList";
export const Product = () => {
  
  return (
    <div className="home">
      {ProductList.map((e=>
        <div className="productCartExplicit" key={e.id}>
        <div className="productCartInfo">
          <div className="productName"><h2>{e.name}</h2></div>
          <div className="productCategory">
            <h3>{e.category}</h3>
            <div id="start">
                        <img src={star} alt=""/>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt=""/>
                     </div>
            </div>
          <div className="productDescription"><h4>{e.description}</h4></div>
          <div className="productPrice"><h2>{e.price.toLocaleString("en-SP", {
                  style: "currency",
                  currency: "EUR",
                })}</h2></div>
          <div className="productContact"><button>Buy Now</button></div>
        </div>
        <div className="productCartImage">
            <img src={e.image} alt="ProductName" />
        </div>
      </div>
      ))}
    </div>
  );
};
