import React from "react";
import $ from "jquery";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/parallax.js";

import i1 from "../assets/images/product-mini-6-100x90.png";
import i2 from "../assets/images/product-mini-7-100x90.png";
import i3 from "../assets/images/logo-default-5-286x124.png";
import i4 from "../assets/images/logo-inverse-5-286x124.png";
import i5 from "../assets/images/banner-1-300x202.jpg";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("button").click(function() {
        $(".rd-navbar-toggle").toggleClass("active");
        $(".rd-navbar-nav-wrap").toggleClass("active");
      });
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
  }
  render() {
    return (
      <header className="section page-header page-header-corporate">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-corporate rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="154px"
            data-xl-stick-up-offset="182px"
            data-xxl-stick-up-offset="214px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <a
              className="rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202 rd-navbar-fixed-element-2"
              href="cart-page.html"
            >
              <span>2</span>
            </a>
            <div className="rd-navbar-aside-outer">
              <div className="rd-navbar-aside">
                <p>Opening hours: Monday - Friday: 08AM-06PM</p>
                <div>
                  <div className="group-xs group-middle">
                    <p className="rd-navbar-basket-text">Your Cart is Empty</p>
                    {}
                    <div className="rd-navbar-basket-wrap">
                      <button
                        className="rd-navbar-basket fl-bigmug-line-shopping202"
                        data-rd-navbar-toggle=".cart-inline"
                      >
                        <span>2</span>
                      </button>
                      <div className="cart-inline">
                        <div className="cart-inline-header">
                          <h5 className="cart-inline-title">
                            In cart:<span> 2</span> Products
                          </h5>
                          <h6 className="cart-inline-title">
                            Total price:<span> $38</span>
                          </h6>
                        </div>
                        <div className="cart-inline-body">
                          <div className="cart-inline-item">
                            <div className="unit unit-spacing-sm align-items-center">
                              <div className="unit-left">
                                <a
                                  className="cart-inline-figure"
                                  href="single-product.html"
                                >
                                  <img src={i1} alt width={100} height={90} />
                                </a>
                              </div>
                              <div className="unit-body">
                                <h6 className="cart-inline-name">
                                  <a href="single-product.html">Oranges</a>
                                </h6>
                                <div>
                                  <div className="group-xs group-middle">
                                    <div className="table-cart-stepper">
                                      <input
                                        className="form-input"
                                        type="number"
                                        data-zeros="true"
                                        defaultValue={1}
                                        min={1}
                                        max={1000}
                                      />
                                    </div>
                                    <h6 className="cart-inline-title">
                                      $15.00
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cart-inline-item">
                            <div className="unit unit-spacing-sm align-items-center">
                              <div className="unit-left">
                                <a
                                  className="cart-inline-figure"
                                  href="single-product.html"
                                >
                                  <img src={i2} alt width={100} height={90} />
                                </a>
                              </div>
                              <div className="unit-body">
                                <h6 className="cart-inline-name">
                                  <a href="single-product.html">Bananas</a>
                                </h6>
                                <div>
                                  <div className="group-xs group-middle">
                                    <div className="table-cart-stepper">
                                      <input
                                        className="form-input"
                                        type="number"
                                        data-zeros="true"
                                        defaultValue={1}
                                        min={1}
                                        max={1000}
                                      />
                                    </div>
                                    <h6 className="cart-inline-title">
                                      $23.00
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-inline-footer">
                          <div className="group-sm">
                            <a
                              className="button button-default-outline-2 button-zakaria"
                              href="#"
                            >
                              Go to cart
                            </a>
                            <a
                              className="button button-primary button-zakaria"
                              href="#"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                <div className="rd-navbar-main-element">
                  {}
                  <div className="rd-navbar-panel">
                    {}
                    <button
                      className="rd-navbar-toggle"
                      data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                    >
                      <span />
                    </button>
                    {}
                    <div className="rd-navbar-brand">
                      {}
                      <a className="brand" href="index.html">
                        <img
                          className="brand-logo-dark"
                          src={i3}
                          alt
                          width={143}
                          height={62}
                        />
                        <img
                          className="brand-logo-light"
                          src={i4}
                          alt
                          width={143}
                          height={62}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="rd-navbar-collapse">
                    <ul className="contacts-amber">
                      <li>
                        <a href="#">
                          523 Sylvan Ave, 5th Floor
                          <br />
                          Mountain View, CA 94041 USA
                        </a>
                      </li>
                      <li>
                        <a href="tel:#">+1 (844) 123 456 78</a>
                        <br />
                        <a href="mailto:#">info@demolink.org</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rd-navbar-nav-wrap">
                  {}
                  <div className="rd-navbar-search">
                    <button
                      className="rd-navbar-search-toggle"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span />
                    </button>
                    <form
                      className="rd-search"
                      action="search-results.html"
                      data-search-live="rd-search-results-live"
                      method="GET"
                    >
                      <div className="form-wrap">
                        <input
                          className="rd-navbar-search-form-input form-input"
                          id="rd-navbar-search-form-input"
                          type="text"
                          name="s"
                          autoComplete="off"
                        />
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input"
                        >
                          Search...
                        </label>
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live"
                        />
                        <button
                          className="rd-search-form-submit fl-bigmug-line-search74"
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="gallery.html">
                        Gallery
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Pages
                      </a>
                      <ul className="rd-menu rd-navbar-megamenu">
                        <li className="rd-megamenu-item rd-megamenu-item-1">
                          <h6 className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-apps" />
                            <span className="rd-megamenu-text">Pages 1</span>
                          </h6>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="404-page.html"
                              >
                                404 Page
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="privacy-policy.html"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="search-results.html"
                              >
                                Search Results
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item rd-megamenu-item-2">
                          <h6 className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-layers" />
                            <span className="rd-megamenu-text">Pages 2</span>
                          </h6>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="about-us.html"
                              >
                                About Us
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="what-we-offer.html"
                              >
                                What We Offer
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="our-team.html"
                              >
                                Our Team
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="pricing-list.html"
                              >
                                Pricing List
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item rd-megamenu-banner">
                          <div className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-food-apple" />
                            <span className="rd-megamenu-text">
                              Welcome to Our Store
                            </span>
                          </div>
                          <a className="banner-classic" href="grid-shop.html">
                            <img src={i5} alt width={300} height={202} />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="blog.html">
                        Blog
                      </a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="blog-post.html">
                            Blog Post
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="grid-shop.html">
                        Shop
                      </a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="grid-shop.html">
                            Grid Shop
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="single-product.html"
                          >
                            Single Product
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="contact-us.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
