import React from "react";
import Footer from "./sub/Footer";
import Header from "./sub/Header";
import style from "./../styles/home.module.css";
import product1 from "./../assets/pipeline.png";
import product2 from "./../assets/fitting.png";
import product3 from "./../assets/valve.png";
import product4 from "./../assets/flanges.png";
import product5 from "./../assets/fasteners.png";
import product6 from "./../assets/gasket.png";
import product7 from "./../assets/bolt.png";
import product8 from "./../assets/pump.png";
import product9 from "./../assets/generator.png";
import product10 from "./../assets/lifting.png";
import arrow from "./../assets/arrow.png";
import about from "./../assets/about.png";
import special from "./../assets/special.png";
import project1 from "./../assets/project1.png";
import project2 from "./../assets/project2.png";
import project3 from "./../assets/project3.png";
import project4 from "./../assets/project4.png";
import project5 from "./../assets/project5.png";
import project6 from "./../assets/project6.png";
import client1 from "./../assets/client1.png";
import client2 from "./../assets/client2.png";
import client3 from "./../assets/client3.png";
import client4 from "./../assets/client4.png";
import client5 from "./../assets/client5.png";
import client6 from "./../assets/client6.png";
import sub from "./../assets/sub.png";
export default function Home() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <p>
          Kemej Icons International, <br /> an indigenous company <br /> in the
          oil and gas sector. <br /> Our company provides <br /> Procurement and{" "}
          <br /> engineering services.
        </p>
        <button>LEARN MORE</button>
      </section>
      <section className={style.brief}>
        <h3>Our Products</h3>
        <div>
          <nav>
            <img src={product1} alt="" />
            <b>Pipes</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
          <nav>
            <img src={product2} alt="" />
            <b>Fittings</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
          <nav>
            <img src={product3} alt="" />
            <b>Valves</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
          <nav>
            <img src={product4} alt="" />
            <b>Flanges</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
          <nav>
            <img src={product5} alt="" />
            <b>Fasteners</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
          <nav>
            <img src={product6} alt="" />
            <b>Gaskets</b>
            <p>Lorem ipsum dolor amet consectetur</p>
            <img src={arrow} alt="" />
          </nav>
        </div>
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
      <section className={style.products}>
        <h3>Products</h3>
        <div>
          <nav>
            <img src={product1} alt="" />
            <b>Pipes</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product2} alt="" />
            <b>Fittings</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product3} alt="" />
            <b>Valves</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product4} alt="" />
            <b>Flanges</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product5} alt="" />
            <b>Fasteners</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product6} alt="" />
            <b>Gaskets</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product7} alt="" />
            <b>Stud Bolts And Nuts</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product8} alt="" />
            <b>Centrifugal Pumps</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product9} alt="" />
            <b>Diesel And Gas Generators</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
          <nav>
            <img src={product10} alt="" />
            <b>Lifting Materials</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </nav>
        </div>
      </section>
      <section className={style.special}>
        <figure>
          <h3>
            What Makes Us <br /> Special{" "}
          </h3>
          <img src={special} alt="" />
        </figure>
        <div>
          <h3>
            What Makes Us <br /> Special{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus,
            enim porttitor in id. Dolor, tincidunt molestie maecenas nunc,
            felis, quis suscipit lectus mattis. Sed etiam diam at congue sed
            ultrices donec. Molestie at consectetur purus in. Nunc sit odio nam
            quam.
          </p>
        </div>
      </section>
      <section className={style.projects}>
        <h3>Our Projects</h3>
        <div>
          <img src={project1} alt="" />
          <img src={project2} alt="" />
          <img src={project3} alt="" />
          <img src={project4} alt="" />
          <img src={project5} alt="" />
          <img src={project6} alt="" />
        </div>
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
      <section className={style.sub}>
        <img src={sub} alt="" />
        <b>Subscribe to Our Newsletter</b>
        <p>
          join our subscribers list to get the latest news, updates <br /> and
          special offers delivered directly to your email
        </p>
        <label>
          <input type="text" placeholder="Enter Your Email" />
          <button>SUBSCRIBE</button>
        </label>
      </section>
      <Footer />
    </div>
  );
}
