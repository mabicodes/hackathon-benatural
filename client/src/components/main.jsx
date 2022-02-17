import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";

export const Main = () =>  {
    return (
        <div className="container-fluid"> 
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}