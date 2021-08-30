import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

class AOSApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return <div data-aos="fade-up">Helloooo!</div>;
  }
}

export default AOSApp;
