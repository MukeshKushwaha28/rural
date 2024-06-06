import React from "react";
import img from  '../../public/images/contactus.jpeg'
import Header from "./Header";
import Footer from "./Footer";

const Policy = () => {
  return (
    <div >

        <Header/>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={img}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Policy;
