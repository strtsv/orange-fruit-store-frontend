import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
// import ProductDawn from "../components/Home/ProductDawn";
// import Events from "../components/Home/Events";
// import NewProducts from "../components/Home/NewProducts";
import AboutUs from "../components/Home/AboutUs";
// import OurTeam from "../components/Home/OurTeam";
// import OurGallery from "../components/Home/OurGallery";
// import Testimonials from "../components/Home/Testimonials";
// import Subscribe from "../components/Home/Subscribe";
// import OurBlog from "../components/Home/OurBlog";
// import Clients from "../components/Home/Clients";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      {/* <ProductDawn /> */}
      {/* <Events /> */}
      {/* <NewProducts /> */}
      <AboutUs />
      {/* <OurTeam /> */}
      {/* <OurGallery /> */}
      {/* <Testimonials /> */}
      {/* <Subscribe /> */}
      {/* <OurBlog /> */}
      {/* <Clients /> */}
      <Footer />
    </div>
  );
};

export default Home;
