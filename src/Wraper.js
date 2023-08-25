import React from "react";
import Navebr from "./Navebr";
import Footer from "./Footer";

const Wraper = ({ children }) => {
  return (
    <div>
      <Navebr />
      {children}
      <Footer />
    </div>
  );
};

export default Wraper;
