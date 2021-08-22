import React from "react";

import i1 from "../../assets/images/about-1-634x373.jpg";
import i2 from "../../assets/images/about-2-634x373.jpg";
import i3 from "../../assets/images/about-3-634x373.jpg";
import i4 from "../../assets/images/about-4-634x373.jpg";
import i5 from "../../assets/images/about-1-143x114.jpg";
import i6 from "../../assets/images/about-2-143x114.jpg";
import i7 from "../../assets/images/about-3-143x114.jpg";
import i8 from "../../assets/images/about-4-143x114.jpg";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-image-1 text-md-left">
        <div className="container">
          <div className="row row-40 row-md-60 justify-content-center align-items-xl-center">
            <div className="col-md-11 col-lg-5">
              <h5 className="title-style-2 wow fadeInRight">
                Best fruits since 1999
              </h5>
              <h2
                className="title-style-3 wow fadeInRight"
                data-wow-delay=".2s"
              >
                Our farm
              </h2>
              <h3
                className="title-style-4 wow fadeInRight"
                data-wow-delay=".3s"
              >
                Who we are
              </h3>
              {}
              <div
                className="tabs-custom tabs-horizontal tabs-line"
                id="tabs-1"
              >
                {}
                <div className="nav-tabs-wrap">
                  <ul className="nav nav-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        href="#tabs-1-1"
                        data-toggle="tab"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        href="#tabs-1-2"
                        data-toggle="tab"
                      >
                        Our mission
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        href="#tabs-1-3"
                        data-toggle="tab"
                      >
                        Our vision
                      </a>
                    </li>
                  </ul>
                </div>
                {}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-1-1">
                    <p>
                      Since its foundation, Orange has been offering best
                      organic fruits for local residents, fruit markets, and
                      guests of our city. We are dedicated to improving your
                      healthy food standards.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tabs-1-2">
                    <p>
                      Our mission is to grow profitably through innovation and
                      operational excellence in supplying fresh produce for all
                      local shops, markets, and residents.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tabs-1-3">
                    <p>
                      In a world with limited natural resources, we aim to play
                      a leading role in supplying first-rate products, providing
                      first-class service and developing efficient fresh
                      produce.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="button button-lg button-shadow-2 button-primary button-zakaria wow fadeInUp"
                href="about-us.html"
              >
                Read more
              </a>
            </div>
            <div className="col-md-11 col-lg-7">
              <div className="slick-slider-1 inset-xl-left-35">
                {}
                <div
                  className="slick-slider carousel-parent slick-nav-1 slick-nav-2"
                  id="carousel-parent"
                  data-items={1}
                  data-autoplay="true"
                  data-slide-effect="true"
                  data-child="#child-carousel"
                  data-for="#child-carousel"
                  data-arrows="true"
                >
                  <div className="item">
                    <img src={i1} alt width={634} height={373} />
                  </div>
                  <div className="item">
                    <img src={i2} alt width={634} height={373} />
                  </div>
                  <div className="item">
                    <img src={i3} alt width={634} height={373} />
                  </div>
                  <div className="item">
                    <img src={i4} alt width={634} height={373} />
                  </div>
                </div>
                <div
                  className="slick-slider child-carousel"
                  id="child-carousel"
                  data-items={3}
                  data-sm-items={4}
                  data-md-items={4}
                  data-lg-items={4}
                  data-xl-items={4}
                  data-xxl-items={4}
                  data-for="#carousel-parent"
                >
                  <div className="item">
                    <img src={i5} alt width={143} height={114} />
                  </div>
                  <div className="item">
                    <img src={i6} alt width={143} height={114} />
                  </div>
                  <div className="item">
                    <img src={i7} alt width={143} height={114} />
                  </div>
                  <div className="item">
                    <img src={i8} alt width={143} height={114} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
