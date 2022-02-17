import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Carousel } from "./home/carousel/Carousel";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";

export const Main = () =>  {
    return (
        <div className="container-main"> 
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}