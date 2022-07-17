import React from "react";
import Footer from "./sub/Footer";
import Header from "./sub/Header";
import style from "./../styles/contact.module.css";
import phone from "./../assets/phone-contact.png";
import email from "./../assets/email-contact.png";
import wa from "./../assets/whatsapp-contact.png";
// import down from './../assets/down.png'
export default function Contact() {
  return (
    <div>
      <Header />
      <section className={style.main}>
        <div>
          <p>
            Kemej Icons International, an <br /> indigenous company in the oil{" "}
            <br /> and gas sector. Our company <br /> provides Procurement and{" "}
            <br /> engineering services.
          </p>
          <p>
            <img src={phone} alt="" /> +234 706 044 0050
          </p>
          <p>
            <img src={email} alt="" /> info@kemejicons.com
          </p>
          <button>
            CONTACT US ON WHATSAPP <img src={wa} alt="" />
          </button>
        </div>
        <form>
          <h3>Leave A Message And We Will Be In Touch</h3>
          <label>
            <span>Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Phone number</span>
            <input type="tel" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label htmlFor="">
            <span>Choose a service</span>
            <select name="sex" id="sex">
              <option value="" selected="selected">
                Choose a Service
              </option>
              <option value="Thermal Power">Thermal Power</option>
              <option value="Oil Platforms">Oil Platforms</option>
              <option value="Oil Platforms">Gas flaring</option>
              <option value="Oil Platforms">Oil Pump</option>
              <option value="Oil Platforms">Oil transportation</option>
              <option value="Oil Platforms">Gas Transportation</option>
            </select>
          </label>
          <button>SUBMIT</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
