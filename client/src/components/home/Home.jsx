import React from "react";
import { MenuHome } from "./menu-home/MenuHome";
import {ProductCard} from "./productCart/ProductCart";
import { Carousel } from "./carousel/Carousel";
import "./home.css"

export const Home = () =>  {
  
    return (
        <div className="home"> 
            <Carousel/>
            <MenuHome/>
            <ProductCard/>
        </div>
    )
}