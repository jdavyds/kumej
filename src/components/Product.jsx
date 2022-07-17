import React from 'react'
import Footer from './sub/Footer'
import Header from './sub/Header'
import style from './../styles/product.module.css'
import product1 from "./../assets/product1.png";
import product2 from "./../assets/product2.png";
import product3 from "./../assets/product3.png";
import product4 from "./../assets/product4.png";
import product5 from "./../assets/product5.png";
import product6 from "./../assets/product6.png";

export default function Product() {
  return (
    <div>
      <Header />
      <section className={style.hero}>
        <h3>Our Services</h3>
      </section>
      <section className={style.services}>
        <h3>Our Services</h3>
        <nav>
          <figure>
            <img src={product1} alt="" />
          </figure>
          <div>
            <b>Thermal Power</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
        </nav>
        <nav>
          <div>
            <b>Oil Platforms</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
          <figure>
            <img src={product2} alt="" />
          </figure>
        </nav>
        <nav>
          <figure>
            <img src={product3} alt="" />
          </figure>
          <div>
            <b>Gas Flaring</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
        </nav>
        <nav>
          <div>
            <b>Oil Pump</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
          <figure>
            <img src={product4} alt="" />
          </figure>
        </nav>
        <nav>
          <figure>
            <img src={product5} alt="" />
          </figure>
          <div>
            <b>Oil Transportation</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
        </nav>
        <nav>
          <div>
            <b>Gas Transportation</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed
              ipsum at etiam amet, praesent diam. Ullamcorper non cum arcu sed
              laoreet eu. Quam non eget lobortis gravida mattis quisque vel.
              Purus elementum eu fringilla eu metus magna. Ac elit luctus
              consectetur integer sed.
            </p>
          </div>
          <figure>
            <img src={product6} alt="" />
          </figure>
        </nav>
      </section>
      <Footer />
    </div>
  );
}
