import React from "react";

import i1 from "../assets/images/payment-1-45x15.png";
import i2 from "../assets/images/payment-2-46x28.png";
import i3 from "../assets/images/payment-3-62x17.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-corporate footer-corporate-2 context-dark">
        <div className="footer-corporate-body section-lg">
          <div className="container">
            <div className="row row-40 row-md-50 justify-content-xl-between">
              <div className="col-sm-6 col-lg-4 wow fadeInRight">
                <h5 className="footer-corporate-title">Visit our farm</h5>
                <div className="footer-corporate-decor" />
                <ul className="footer-corporate-info">
                  <li>
                    <div className="unit flex-column flex-sm-row align-items-center">
                      <div className="unit-left">
                        <span className="icon mdi mdi-map-marker" />
                      </div>
                      <div className="unit-body">
                        <a href="#">
                          523 Sylvan Ave, 5th Floor
                          <br />
                          Mountain View, CA 94041 USA
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit flex-column flex-sm-row align-items-center">
                      <div className="unit-left">
                        <span className="icon mdi mdi-clock" />
                      </div>
                      <div className="unit-body">
                        <ul className="list-schedule">
                          <li>
                            <span>Weekdays:</span>
                            <span>08:00am - 08:00pm</span>
                          </li>
                          <li>
                            <span>Weekends:</span>
                            <span>10:00am - 06:00pm</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-lg-4 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <h5 className="footer-corporate-title">Quick links</h5>
                <div className="footer-corporate-decor" />
                <ul className="footer-corporate-list d-sm-inline-block d-md-block">
                  <li>
                    <a href="about-us.html">History</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="our-team.html">Farmers</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="#">Organic Fruits</a>
                  </li>
                  <li>
                    <a href="#">Our Smoothies</a>
                  </li>
                  <li>
                    <a href="#">Fruit Boxes</a>
                  </li>
                  <li>
                    <a href="#">Yoghurts</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 wow fadeInRight" data-wow-delay=".2s">
                <h5 className="footer-corporate-title">Get in touch</h5>
                <div className="footer-corporate-decor" />
                <p className="footer-corporate-text">
                  We are always ready to answer any questions you may have or
                  help you select organic fruits.
                </p>
                <div className="group-sm group-middle">
                  <a
                    className="button button-shadow-2 button-gray-14 button-zakaria"
                    href="grid-shop.html"
                  >
                    Shop now
                  </a>
                  <a
                    className="button button-shadow-2 button-primary-2 button-zakaria"
                    href="contact-us.html"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-corporate-panel">
          <div className="container">
            <div className="row row-10 row-sm-30 align-items-center justify-content-sm-between">
              <div className="col-sm-auto col-lg-4 text-lg-left">
                <div className="group-xs group-middle">
                  <img src={i1} alt width={45} height={15} />
                  <img src={i2} alt width={46} height={28} />
                  <img src={i3} alt width={62} height={17} />
                </div>
              </div>
              <div className="col-sm-auto col-lg-4">
                <ul className="list-inline list-social-4 list-inline-xs">
                  <li>
                    <a className="icon mdi mdi-facebook icon-xxs" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-twitter icon-xxs" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-instagram icon-xxs" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-google-plus icon-xxs" href="#" />
                  </li>
                  <li>
                    <a className="icon mdi mdi-skype icon-xxs" href="#" />
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 text-lg-right">
                <p className="rights">
                  <span>©  </span>
                  <span className="copyright-year" />
                  <span> </span>
                  <span>Orange</span>
                  <span>.  All rights reserved.</span>
                  <span> </span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
