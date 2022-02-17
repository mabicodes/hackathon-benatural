import React from "react";
import "./product.css";

import { ProductList } from "../../assets/Data/ProductList";
export const Product = () => {
  
  return (
    <div className="home">
      {ProductList.map((e=>
        <div className="productCartExplicit" key={e.id}>
        <div className="productCartInfo">
          <div className="productName"><h2>{e.name}</h2></div>
          <div className="productCategory"><h3>{e.category}</h3></div>
          <div className="productDescription"><h4>{e.description}</h4></div>
          <div className="productPrice"><h2>{e.price.toLocaleString("en-SP", {
                  style: "currency",
                  currency: "EUR",
                })}</h2></div>
          <div className="productContact"><button>Contact</button></div>
        </div>
        <div className="productCartImage">
            <img src={e.image} alt="ProductName" />
        </div>
      </div>
      ))}
    </div>
  );
};
