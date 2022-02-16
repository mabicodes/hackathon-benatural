import React from "react";
import { MenuHome } from "./menu-home/MenuHome";
import { Carousel } from "./carousel/Carousel";

export const Home = () =>  {
  
    return (
        <div className="home"> 
            <Carousel/>
            escribe codigo aqui Home
            <MenuHome/>
        </div>
    )
}