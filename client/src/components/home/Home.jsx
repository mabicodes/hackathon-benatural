import React from "react";
import { MenuHome } from "./menu-home/MenuHome";
import { Carousel } from "./carousel/Carousel";
import "./home.css"

export const Home = () =>  {
  
    return (
        <div className="home"> 
            <Carousel/>
            <MenuHome/>
            ContainerCartsProduct
        </div>
    )
}