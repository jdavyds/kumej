import React from "react";
import Footer from "./sub/Footer";
import Header from "./sub/Header";
import style from "./../styles/about.module.css";
import about from "./../assets/about.png";
import about1 from "./../assets/about1.png";
import about2 from "./../assets/about2.png";
import about3 from "./../assets/about3.png";
import client1 from "./../assets/client1.png";
import client2 from "./../assets/client2.png";
import client3 from "./../assets/client3.png";
import client4 from "./../assets/client4.png";
import client5 from "./../assets/client5.png";
import client6 from "./../assets/client6.png";
import team1 from "./../assets/team1.png";
import team2 from "./../assets/team2.png";
import team3 from "./../assets/team3.png";
import team4 from "./../assets/team4.png";
import string from "./../assets/string.png";
export default function About() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>About Us</h3>
      </section>
      <section className={style.about}>
        <div>
          <h3>About Kemej Icons International</h3>
          <p>
            We hereby introduce to you our company, Kemej Icons International,
            an indigenous company in the oil and gas sector. Our company
            provides Procurement and project management consultancy service.
            Kemej Icons international has agency/dealership with manufacturers
            in the USA, England, Sweden, India and China for our line of
            products. The products of our manufacturers are internationally
            certified. Our products are used in Oil & Gas, Petrochemical,
            Construction, Water, etc;
          </p>
        </div>
        <figure>
          <h3>About Kemej Icons International</h3>
          <img src={about} alt="" />
        </figure>
      </section>
      <section className={style.history}>
        <h3>Our History</h3>
        <nav>
          <figure>
            <img src={about1} alt="" />
          </figure>
          <div>
            <b>April 2020</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
          <img src={string} alt="" />
        </nav>
        <nav>
          <div>
            <b>April 2020</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
          <figure>
            <img src={about2} alt="" />
          </figure>
          <img src={string} alt="" />
        </nav>
        <nav>
          <figure>
            <img src={about3} alt="" />
          </figure>
          <div>
            <b>April 2020</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
        </nav>
      </section>
      <section className={style.clients}>
        <h3>Our Clients</h3>
        <div>
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
        </div>
      </section>
      <section className={style.statement}>
        <b>Mission</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed ipsum
          at etiam amet, praesent diam. Ullamcorper non cum arcu sed laoreet eu.
          Quam non eget lobortis gravida mattis quisque vel. Purus elementum eu
          fringilla eu metus magna. Ac elit luctus consectetur integer sed.
        </p>
        <b>Mission</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed ipsum
          at etiam amet, praesent diam. Ullamcorper non cum arcu sed laoreet eu.
          Quam non eget lobortis gravida mattis quisque vel. Purus elementum eu
          fringilla eu metus magna. Ac elit luctus consectetur integer sed.
        </p>
      </section>
      <section className={style.team}>
        <h3>Our Team</h3>
        <div>
          <nav>
            <img src={team1} alt="" />
            <p>
              Paul Olu <br /> MD/CEO
            </p>
          </nav>
          <nav>
            <img src={team2} alt="" />
            <p>
              Paula Olu <br /> President
            </p>
          </nav>
          <nav>
            <img src={team3} alt="" />
            <p>
              Emma Ope <br /> CTO
            </p>
          </nav>
          <nav>
            <img src={team4} alt="" />
            <p>
              Joy Smart <br /> HR
            </p>
          </nav>
        </div>
      </section>
      <Footer />
    </div>
  );
}
