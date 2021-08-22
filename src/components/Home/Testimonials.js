import React from "react";

import i1 from "../../assets/images/user-7-87x87.jpg";
import i2 from "../../assets/images/user-8-87x87.jpg";
import i3 from "../../assets/images/user-9-87x87.jpg";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-3 wow fadeScale">Testimonials</h2>
          <div className="row row-sm row-30 justify-content-center">
            <div className="col-xl-9">
              <div className="slick-quote">
                {}
                <div
                  className="slick-slider carousel-parent"
                  id="carousel-parent-2"
                  data-autoplay="true"
                  data-swipe="true"
                  data-items={1}
                  data-child="#child-carousel-2"
                  data-for="#child-carousel-2"
                >
                  <div className="item">
                    <p className="quote-minimal-text">
                      I just can’t say enough good things about your farm and
                      the products you provide. Since I first bought your apples
                      at a local store, I’m your regular client. Thank you for
                      everything!
                    </p>
                  </div>
                  <div className="item">
                    <p className="quote-minimal-text">
                      As your customers, we really enjoy the fresh vegetables
                      and fruits. Everyone at your farm is very helpful,
                      friendly and courteous. We highly recommend this farm to
                      everyone.
                    </p>
                  </div>
                  <div className="item">
                    <p className="quote-minimal-text">
                      We love the variety of produce that we receive from you
                      every week and the challenge of cooking creatively to use
                      everything you deliver. Thank you for the great service!
                    </p>
                  </div>
                </div>
                <div className="slick-quote-nav">
                  <div
                    className="slick-slider child-carousel"
                    id="child-carousel-2"
                    data-arrows="true"
                    data-for="#carousel-parent-2"
                    data-items={1}
                    data-sm-items={1}
                    data-md-items={3}
                    data-lg-items={3}
                    data-xl-items={3}
                    data-xxl-items={3}
                  >
                    <div className="item">
                      <div className="quote-minimal-figure">
                        <img src={i1} alt width={87} height={87} />
                      </div>
                      <div className="quote-minimal-author">Bill Wilson</div>
                      <div className="quote-minimal-status">Client</div>
                    </div>
                    <div className="item">
                      <div className="quote-minimal-figure">
                        <img src={i2} alt width={87} height={87} />
                      </div>
                      <div className="quote-minimal-author">
                        Samantha Williams
                      </div>
                      <div className="quote-minimal-status">Client</div>
                    </div>
                    <div className="item">
                      <div className="quote-minimal-figure">
                        <img src={i3} alt width={87} height={87} />
                      </div>
                      <div className="quote-minimal-author">James Smith</div>
                      <div className="quote-minimal-status">Client</div>
                    </div>
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

export default Testimonials;
