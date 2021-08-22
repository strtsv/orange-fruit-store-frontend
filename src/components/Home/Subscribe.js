import React from "react";

import i from "../../assets/images/parallax-1.jpg";

class Subscribe extends React.Component {
  render() {
    return (
      <section className="parallax-container" data-parallax-img={i} data-image-src={i}>
        <div className="parallax-content section-xxl context-dark text-md-left">
          <div className="container">
            <div className="row row-30 justify-content-center align-items-center align-items-md-end">
              <div className="col-lg-3">
                <h3 className="text-spacing-100 wow fadeInLeft">
                  Stay <span className="font-weight-light">connected</span>
                </h3>
                <p className="wow fadeInLeft" data-wow-delay=".1s">
                  Subscribe to our newsletter
                </p>
              </div>
              <div className="col-lg-8 col-xl-9 inset-lg-bottom-10">
                {}
                <form
                  className="rd-form rd-mailform rd-form-inline form-lg rd-form-text-center"
                  data-form-output="form-output-global"
                  data-form-type="subscribe"
                  method="post"
                  action="bat/rd-mailform.php"
                >
                  <div className="form-wrap wow fadeInUp">
                    <input
                      className="form-input"
                      id="subscribe-form-0-email"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                    <label
                      className="form-label"
                      htmlFor="subscribe-form-0-email"
                    >
                      Enter your e-mail address
                    </label>
                  </div>
                  <div className="form-button wow fadeInRight">
                    <button
                      className="button button-shadow-2 button-zakaria button-lg button-primary"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
