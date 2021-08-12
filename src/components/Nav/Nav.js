import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = (props) => {
  return (
    <div>
      <nav className="nav-links">
        <h1>GameShop</h1>
        <ul>
          <li>
            <Link to="/">Jogos</Link>
          </li>
          <li>
            <Link to="/Cart">Carrinho ({props.cartItems})</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
