import React from "react";
import {Link} from 'react-scroll';
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
          <Link to={`/`}>Home</Link>
          <Link to={`scroll2products`} smooth={true} offset={-70} duration={600}>Products</Link>
          <Link to={`scroll2footer`} smooth={true} offset={-70} duration={500} >Contact</Link>
        </ul>
        <button className="login"><img src={login} alt="loginIco" /></button>
      </div>
    </header>
  );
};
