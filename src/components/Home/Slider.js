import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/slide-1.jpg";
import i2 from "../../assets/images/slide-2.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-6 swiper-nav-1"
        data-loop="true"
      >
        <div className="swiper-wrapper text-sm-left">
          <div
            className="swiper-slide"
            data-slide-bg={i1}
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="swiper-box">
                  <h5
                    className="swiper-title-3"
                    data-caption-animate="fadeInRight"
                    data-caption-delay={200}
                  >
                    Providing quality products
                  </h5>
                  <h2
                    className="swiper-title-1"
                    data-caption-animate="fadeInLeft"
                    data-caption-delay={100}
                  >
                    Organic Fruits
                  </h2>
                  <h3
                    className="swiper-title-2"
                    data-caption-animate="fadeInRight"
                    data-caption-delay={200}
                  >
                    100% healthy &<br />
                    affordable
                  </h3>
                  <div
                    className="button-wrap"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={300}
                  >
                    <a
                      className="button button-lg button-shadow-2 button-primary button-zakaria"
                      href="grid-shop.html"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide"
            data-slide-bg={i2}
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="swiper-box">
                  <h5
                    className="swiper-title-3"
                    data-caption-animate="fadeInRight"
                    data-caption-delay={200}
                  >
                    Summer discounts up to 40%
                  </h5>
                  <h2
                    className="swiper-title-1"
                    data-caption-animate="fadeInLeft"
                    data-caption-delay={100}
                  >
                    A Wide Variety
                  </h2>
                  <h3
                    className="swiper-title-2"
                    data-caption-animate="fadeInRight"
                    data-caption-delay={200}
                  >
                    Of Different
                    <br />
                    Fruits
                  </h3>
                  <div
                    className="button-wrap"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={300}
                  >
                    <a
                      className="button button-lg button-shadow-2 button-primary button-zakaria"
                      href="grid-shop.html"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination" />
        {}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </section>
    );
  }
}

export default Slider;
