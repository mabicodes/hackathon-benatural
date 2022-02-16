import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import naturalyLogo from "../../assets/img/leaft.png"
import login from "../../assets/img/login.png";

export const Navbar = () => {
  return (
    <header>
      <div className="banner">
        <div className="logoCompany"><img src={naturalyLogo} alt="NaturalyLogo" /></div>
        <div className="nameCompany"><h1>Be Natural</h1></div>
        <div className="sloganCompany"><h3>The best way to fell good</h3></div>
      </div>
      <div className="navbar">
        <ul>
          <Link to={`./`}>Home</Link>
          <Link to={`./Products`}>Products</Link>
          <Link to={`./Contact`}>Contact</Link>
        </ul>
        <button className="login"><img src={login} alt="loginIco" /></button>
      </div>
    </header>
  );
};
