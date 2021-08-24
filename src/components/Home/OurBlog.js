import React from "react";

import i1 from "../../assets/images/post-1-550x247.jpg";
import i2 from "../../assets/images/post-2-550x247.jpg";

class OurBlog extends React.Component {
  render() {
    return (
      <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="title-style-3 wow fadeScale">Our blog</h2>
          <div className="row row-lg row-30">
            <div className="col-sm-6 wow fadeInLeft">
              {}
              <article className="post post-lisa block-2">
                <div className="post-lisa-content">
                  <a className="post-lisa-tag" href="#">
                    News
                  </a>
                  <h4 className="post-lisa-title">
                    <a href="blog-post.html">
                      Lemons & Limes: Why They are Especially Tasty in Winter
                    </a>
                  </h4>
                  <div className="post-lisa-time">
                    <time dateTime="2020-08-09">August 9, 2020</time>
                  </div>
                </div>
                <a className="post-lisa-figure" href="blog-post.html">
                  <img src={i1} alt width={550} height={247} />
                </a>
              </article>
            </div>
            <div className="col-sm-6 wow fadeInRight">
              {}
              <article className="post post-lisa block-2">
                <div className="post-lisa-content">
                  <a className="post-lisa-tag" href="#">
                    Fruits
                  </a>
                  <h4 className="post-lisa-title">
                    <a href="blog-post.html">
                      10 Health Benefits: What Secrets Do Watermelons Keep?
                    </a>
                  </h4>
                  <div className="post-lisa-time">
                    <time dateTime="2020-08-09">August 9, 2020</time>
                  </div>
                </div>
                <a className="post-lisa-figure" href="blog-post.html">
                  <img src={i2} alt width={550} height={247} />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default OurBlog;
