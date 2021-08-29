import React from "react";
import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/product-1-234x362.png";
import i2 from "../../assets/images/product-2-200x362.png";
import i3 from "../../assets/images/product-3-220x362.png";
import i4 from "../../assets/images/product-4-195x362.png";

const options = {
  loop: true,
  autoplay: false,
  margin: 30,
  smartSpeed: 450,
  dots: false,
  dotsEach: 1,
  nav: true,
  items: 4,
  navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
  responsive: {
    0: { items: 1 },
    480: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
  },
};

class ProductDawn extends React.Component {
  render() {
    return (
      <section className="section bg-default">
        {}
        <div
          className="owl-style-13"
          // className="owl-carousel owl-style-13"
          data-items={1}
          data-sm-items={2}
          data-lg-items={3}
          data-xxl-items={4}
          data-dots="true"
          data-mouse-drag="false"
        >
          <OwlCarousel {...options}>
            {}
            <a className="product-dawn product-dawn-bg-1" href="grid-shop.html">
              <div className="unit unit-spacing-0 align-items-center">
                <div className="unit-left">
                  <div className="product-dawn-figure">
                    <img src={i1} alt width={234} height={362} />
                  </div>
                </div>
                <div className="unit-body">
                  <div className="product-dawn-title">
                    <div className="heading-3 product-dawn-title-big">
                      Order
                    </div>
                    <div className="heading-5 product-dawn-title-small">
                      Our fruit box
                    </div>
                  </div>
                  <div className="product-dawn-price">From $89.00</div>
                  <div className="button button-sm button-icon-3 product-dawn-button">
                    <span className="mdi mdi-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            {}
            <a className="product-dawn product-dawn-bg-2" href="grid-shop.html">
              <div className="unit unit-spacing-0 align-items-center">
                <div className="unit-left">
                  <div className="product-dawn-figure">
                    <img src={i2} alt width={200} height={362} />
                  </div>
                </div>
                <div className="unit-body">
                  <div className="product-dawn-title">
                    <div className="heading-3 product-dawn-title-big">
                      Fresh
                    </div>
                    <div className="heading-5 product-dawn-title-small">
                      Smoothies
                    </div>
                  </div>
                  <div className="product-dawn-price">From $12.00</div>
                  <div className="button button-sm button-icon-3 product-dawn-button">
                    <span className="mdi mdi-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            {}
            <a className="product-dawn product-dawn-bg-3" href="grid-shop.html">
              <div className="unit unit-spacing-0 align-items-center">
                <div className="unit-left">
                  <div className="product-dawn-figure">
                    <img src={i3} alt width={220} height={362} />
                  </div>
                </div>
                <div className="unit-body">
                  <div className="product-dawn-title">
                    <div className="heading-3 product-dawn-title-big">New</div>
                    <div className="heading-5 product-dawn-title-small">
                      Summer offers
                    </div>
                  </div>
                  <div className="product-dawn-price">From $21.00</div>
                  <div className="button button-sm button-icon-3 product-dawn-button">
                    <span className="mdi mdi-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            {}
            <a className="product-dawn product-dawn-bg-4" href="grid-shop.html">
              <div className="unit unit-spacing-0 align-items-center">
                <div className="unit-left">
                  <div className="product-dawn-figure">
                    <img src={i4} alt width={195} height={362} />
                  </div>
                </div>
                <div className="unit-body">
                  <div className="product-dawn-title">
                    <div className="heading-3 product-dawn-title-big">Shop</div>
                    <div className="heading-5 product-dawn-title-small">
                      new arrivals
                    </div>
                  </div>
                  <div className="product-dawn-price">From $18.00</div>
                  <div className="button button-sm button-icon-3 product-dawn-button">
                    <span className="mdi mdi-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default ProductDawn;
