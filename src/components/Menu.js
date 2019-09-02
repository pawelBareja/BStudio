import React from 'react';
import { NavLink } from 'react-router-dom';


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

const Menu = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink className="menu__item" to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))



  return (
    <>
        {menu}
    </>
  );
}

export default Menu;






