import React from 'react';
import BurgerMenu from '../components/BurgerMenu'
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.jpg";
// import "../styles/style.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  // { name: "kontakt", path: "/contact" },
  // { name: "panel admin", path: "/admin" },
  // { name: "strony internetowe", path: "/strony-internetowe" },
  // { name: "analityka-internetowa", path: "/analityka-internetowa" },
  { name: "realizacje", path: "/realizacje" },
  { name: "referencje klientów", path: "/referencje-klientów" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink className="menu__item" to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))



  return (
    <nav className="">
      <div className="brand" href="#home">
        <img src={logo} alt="logo" width="221" height="60" />
      </div>
      <ul className="menu">
        {menu}
      </ul>
      < BurgerMenu />
    </nav >
  );
}

export default Navigation;






