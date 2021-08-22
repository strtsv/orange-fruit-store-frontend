import React from "react";

class Clients extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-image-1">
        <div className="container">
          <div
            className="owl-carousel owl-style-2"
            data-items={2}
            data-sm-items={3}
            data-md-items={4}
            data-lg-items={5}
            data-margin={30}
            data-dots="true"
          >
            <a className="clients-classic" href="#">
              <img
                src="images/clients-1-120x114.png"
                alt
                width={120}
                height={114}
              />
            </a>
            <a className="clients-classic" href="#">
              <img
                src="images/clients-2-105x118.png"
                alt
                width={105}
                height={118}
              />
            </a>
            <a className="clients-classic" href="#">
              <img
                src="images/clients-3-111x98.png"
                alt
                width={111}
                height={98}
              />
            </a>
            <a className="clients-classic" href="#">
              <img
                src="images/clients-4-122x92.png"
                alt
                width={122}
                height={92}
              />
            </a>
            <a className="clients-classic" href="#">
              <img
                src="images/clients-5-112x112.png"
                alt
                width={112}
                height={112}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Clients;
