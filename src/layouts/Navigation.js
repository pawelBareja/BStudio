import React from 'react';
import BurgerMenu from '../components/BurgerMenu'
import Menu from '../components/Menu'
import logo from "../images/logo.jpg";
// import "../styles/style.css";



const Navigation = () => {



  return (
    <nav className="">
      <div className="brand" href="#home">
        <img src={logo} alt="logo" width="221" height="60" />
      </div>
      <ul className="menu">
        <Menu />
      </ul>
      < BurgerMenu />
    </nav >
  );
}

export default Navigation;






