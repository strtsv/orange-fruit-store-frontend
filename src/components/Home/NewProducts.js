import React from "react";
import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/product-big-7-344x250.png";
import i2 from "../../assets/images/product-big-8-358x243.png";
import i3 from "../../assets/images/product-5-204x156.png";
import i4 from "../../assets/images/product-1-220x160.png";
import i5 from "../../assets/images/product-10-230x159.png";
import i6 from "../../assets/images/product-9-185x155.png";

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

class NewProducts extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-3 wow fadeScale">New products</h2>
          <div className="row row-30 justify-content-center align-items-center">
            <div className="col-md-9 col-lg-6">
              <div className="owl-nav-1 owl-nav-2">
                <div className="owl-style-14">
                  {}
                  <div
                    // className="owl-carousel"
                    data-items={1}
                    data-autoplay="true"
                    data-mouse-drag="true"
                    data-navigation-class=".owl-nav-1"
                  >
                    {}
                    <OwlCarousel {...options}>
                      <article className="product-terri">
                        <h3 className="product-terri-title">
                          <a href="single-product.html">Grapefruits</a>
                        </h3>
                        <div className="product-terri-price-wrap">
                          <div className="product-terri-price product-terri-price-old">
                            $30.00
                          </div>
                          <div className="product-terri-price">$23.00</div>
                        </div>
                        <div className="product-terri-figure">
                          <img src={i1} alt width={344} height={250} />
                        </div>
                      </article>
                      {}
                      <article className="product-terri">
                        <h3 className="product-terri-title">
                          <a href="single-product.html">Watermelons</a>
                        </h3>
                        <div className="product-terri-price-wrap">
                          <div className="product-terri-price product-terri-price-old">
                            $28.00
                          </div>
                          <div className="product-terri-price">$17.00</div>
                        </div>
                        <div className="product-terri-figure">
                          <img src={i2} alt width={358} height={243} />
                        </div>
                      </article>
                    </OwlCarousel>
                  </div>
                  <div
                    className="countdown-mini-wrap"
                    data-countdown="data-countdown"
                    data-from="2020-07-26"
                    data-to="2020-12-31"
                  >
                    <div
                      className="countdown-circle countdown-hours"
                      data-circle-countdown="data-circle-countdown"
                      data-units="Hours"
                    >
                      <div className="countdown-number">
                        <svg
                          x="0px"
                          y="0px"
                          width="90px"
                          height="90px"
                          viewBox="0 0 100 100"
                        >
                          <clipPath className="progress-clip">
                            <path d />
                          </clipPath>
                          <circle
                            className="countdown-bg"
                            cx={50}
                            cy={50}
                            r={41}
                          />
                          <circle
                            className="clipped countdown-fg"
                            cx={50}
                            cy={50}
                            r={48}
                          />
                        </svg>
                        <div className="countdown-overlay">
                          <h4 className="countdown-counter countdown-mini-counter" />
                        </div>
                      </div>
                      <div className="countdown-mini-heading">HRS</div>
                    </div>
                    <div
                      className="countdown-circle countdown-minutes"
                      data-circle-countdown="data-circle-countdown"
                      data-units="Minutes"
                    >
                      <div className="countdown-number">
                        <svg
                          x="0px"
                          y="0px"
                          width="90px"
                          height="90px"
                          viewBox="0 0 100 100"
                        >
                          <clipPath className="progress-clip">
                            <path d />
                          </clipPath>
                          <circle
                            className="countdown-bg"
                            cx={50}
                            cy={50}
                            r={41}
                          />
                          <circle
                            className="clipped countdown-fg"
                            cx={50}
                            cy={50}
                            r={48}
                          />
                        </svg>
                        <div className="countdown-overlay">
                          <h4 className="countdown-counter countdown-mini-counter" />
                        </div>
                      </div>
                      <div className="countdown-mini-heading">MIN</div>
                    </div>
                    <div
                      className="countdown-circle countdown-seconds"
                      data-circle-countdown="data-circle-countdown"
                      data-units="Seconds"
                    >
                      <div className="countdown-number">
                        <svg
                          x="0px"
                          y="0px"
                          width="90px"
                          height="90px"
                          viewBox="0 0 100 100"
                        >
                          <clipPath className="progress-clip">
                            <path d />
                          </clipPath>
                          <circle
                            className="countdown-bg"
                            cx={50}
                            cy={50}
                            r={41}
                          />
                          <circle
                            className="clipped countdown-fg"
                            cx={50}
                            cy={50}
                            r={48}
                          />
                        </svg>
                        <div className="countdown-overlay">
                          <h4 className="countdown-counter countdown-mini-counter" />
                        </div>
                      </div>
                      <div className="countdown-mini-heading">SEC</div>
                    </div>
                  </div>
                  <a
                    className="button button-sm button-shadow-2 button-primary button-zakaria"
                    href="grid-shop.html"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-lg-6">
              <div className="row row-30 row-md-40">
                <div className="col-sm-6 wow fadeInDown">
                  {}
                  <article className="product product-3">
                    <div className="product-body">
                      <div className="product-figure">
                        <img src={i4} alt width={204} height={156} />
                      </div>
                      <h5 className="product-title">
                        <a href="single-product.html">Strawberries</a>
                      </h5>
                      <div className="product-price-wrap">
                        <div className="product-price">$15.00</div>
                      </div>
                    </div>
                    <div className="product-button-wrap">
                      <div className="product-button">
                        <a
                          className="button button-style-2 button-zakaria fl-bigmug-line-search74"
                          href="single-product.html"
                        />
                      </div>
                      <div className="product-button">
                        <a
                          className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                          href="#"
                        />
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".1s">
                  {}
                  <article className="product product-3">
                    <div className="product-body">
                      <div className="product-figure">
                        <img src={i3} alt width={220} height={160} />
                      </div>
                      <h5 className="product-title">
                        <a href="single-product.html">Bananas</a>
                      </h5>
                      <div className="product-price-wrap">
                        <div className="product-price product-price-old">
                          $30.00
                        </div>
                        <div className="product-price">$23.00</div>
                      </div>
                    </div>
                    <span className="product-badge product-badge-sale">
                      Sale
                    </span>
                    <div className="product-button-wrap">
                      <div className="product-button">
                        <a
                          className="button button-style-2 button-zakaria fl-bigmug-line-search74"
                          href="single-product.html"
                        />
                      </div>
                      <div className="product-button">
                        <a
                          className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                          href="#"
                        />
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6 wow fadeInUp">
                  {}
                  <article className="product product-3">
                    <div className="product-body">
                      <div className="product-figure">
                        <img src={i5} alt width={230} height={159} />
                      </div>
                      <h5 className="product-title">
                        <a href="single-product.html">Pineapples</a>
                      </h5>
                      <div className="product-price-wrap">
                        <div className="product-price product-price-old">
                          $30.00
                        </div>
                        <div className="product-price">$23.00</div>
                      </div>
                    </div>
                    <span className="product-badge product-badge-sale">
                      Sale
                    </span>
                    <div className="product-button-wrap">
                      <div className="product-button">
                        <a
                          className="button button-style-2 button-zakaria fl-bigmug-line-search74"
                          href="single-product.html"
                        />
                      </div>
                      <div className="product-button">
                        <a
                          className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                          href="#"
                        />
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6 wow fadeInUp" data-wow-delay=".1s">
                  {}
                  <article className="product product-3">
                    <div className="product-body">
                      <div className="product-figure">
                        <img src={i6} alt width={185} height={155} />
                      </div>
                      <h5 className="product-title">
                        <a href="single-product.html">Galia melons</a>
                      </h5>
                      <div className="product-price-wrap">
                        <div className="product-price">$18.00</div>
                      </div>
                    </div>
                    <div className="product-button-wrap">
                      <div className="product-button">
                        <a
                          className="button button-style-2 button-zakaria fl-bigmug-line-search74"
                          href="single-product.html"
                        />
                      </div>
                      <div className="product-button">
                        <a
                          className="button button-primary-2 button-zakaria fl-bigmug-line-shopping202"
                          href="#"
                        />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewProducts;
