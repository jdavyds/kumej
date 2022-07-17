import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import location from './../../assets/location.png'
import call from './../../assets/call.png'
import email from './../../assets/email.png'
import fb from './../../assets/fb.png'
import insta from './../../assets/insta.png'
import whatsapp from './../../assets/whatsapp.png'
import style from './../../styles/sub/footer.module.css'
export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.main}>
        <div>
          <img src={logo} alt="" />
          <p>
            We hereby introduce to you our company, <br /> Kemej Icons
            International, an indigenous company <br /> in the oil and gas
            sector. Our company provides <br />
            Procurement and project management consultancy service.
          </p>
        </div>
        <nav>
          <h3>Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product-and-services">Product & Services</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/">Blog</Link>
        </nav>
        <div>
          <nav>
            <img src={location} alt="" />
            <p>
              8 Ogodor Layout Near Chinkelly School, <br /> off NPA Expressway,
              Ekpan-Warri, Delta state, <br /> Nigeria.
            </p>
          </nav>
          <nav>
            <img src={call} alt="" /> <p>+234 706 0440 050</p>
          </nav>
          <nav>
            <img src={email} alt="" /> <p>info@tkemejiconsinternational.com</p>
          </nav>
          <nav>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={whatsapp} alt="" />
          </nav>
        </div>
      </section>
      <span>© 2022. Kemej Icons International All Rights Reserved.</span>
    </footer>
  );
}
