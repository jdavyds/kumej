import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import style from "./../../styles/sub/header.module.css";
import ham from "./../../assets/ham.png";
import cancel from "./../../assets/cancel.svg";

export default function Header() {
  const [hamNav, setHamNav] = useState(false);
  function handleShow() {
    setHamNav(!hamNav);
  }
  return (
    <header className={style.header}>
      <img src={logo} alt="" />
      <nav className={hamNav ? style.show : ""}>
        <NavLink to="/" onClick={handleShow}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleShow}>
          About
        </NavLink>
        <NavLink to="/products-and-services" onClick={handleShow}>
          Product & Services
        </NavLink>
        <NavLink to="/contact-us" onClick={handleShow}>
          Contact Us
        </NavLink>
      </nav>
      <img
        className={style.ham}
        src={hamNav ? cancel : ham}
        onClick={handleShow}
        alt=""
      />
    </header>
  );
}
