import React, { useState } from "react";
import "./Navbar1.css";
import logo from "../../assets/delight_denight_logo.png";
import cart_icon from "../../assets/cart.jpg";
import { Link } from "react-router";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // for mobile toggle

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="head">
      <div className="logo_img_name">
        <img src={logo} height="70" alt="Logo" />
        <p>Delight Denights</p>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-items ${isOpen ? "open" : ""}`}>
        <li onClick={() => setMenu("home")}>
          <Link to="/" className="nav-link">HOME</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => setMenu("vegeterian")}>
          <Link to="/vegeterian" className="nav-link">VEGETERIAN</Link>
          {menu === "vegeterian" && <hr />}
        </li>
        <li onClick={() => setMenu("non-vegeterian")}>
          <Link to="/non-vegeterian" className="nav-link">NON-VEGETERIAN</Link>
          {menu === "non-vegeterian" && <hr />}
        </li>
        <li onClick={() => setMenu("desserts")}>
          <Link to="/desserts" className="nav-link">DESSERTS</Link>
          {menu === "desserts" && <hr />}
        </li>
        <li onClick={() => setMenu("beverages")}>
          <Link to="/beverages" className="nav-link">BEVERAGES</Link>
          {menu === "beverages" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} height="40" alt="Cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
