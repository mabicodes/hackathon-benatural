import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "./components/home/Home";
import {Main} from "./components/main";
import "./components/main.css"
import { Product } from "./components/Product/Product";
import ProductComponent from "./components/ProductComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/" element={<Product/>}/>
        <Route path="/productPrueba/" element={<ProductComponent/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
