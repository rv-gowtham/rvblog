import React from "react";
import logo from "../../assets/wlogo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.png";
import linkin from "../../assets/linkedin.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer container-fluid col-12 d-flex bg-dark flex-column  align-items-center text-white">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <div className="footer_brand d-flex justify-content-center align-items-center">
              <img
                className=""
                src={logo}
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <h1 className="display-3 fw-bold">'s Block</h1>
            </div>
            <div className="col-12 mt-4 mt-md-2 text-center">
              <p>
                <span className="footer_brand">Rv's Block</span>
                <br className="d-block d-md-none" /> is a modern, minimalistic
                blog platform where ideas meet clarity. Discover engaging
                stories, tutorials, and insights—all in one place. Built for
                readers and creators alike.
              </p>
            </div>
          </div>
          <div className="mt-md-5 col-12 col-md-4 d-flex flex-column align-items-center">
            <p>“Your thoughts, your space.”</p>
            <p>“Write. Share. Inspire.”</p>
            <p>“Where every post finds its voice.”</p>
          </div>
          <div className="link_icons col-12 col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-around row-gap-3">
            <div>
              <a href="https://www.linkedin.com/in/rv-gowtham-44900a27b/">
                <img src={linkin} alt="" style={{ width: "50px" }} />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/_rvgowtham/">
                <img
                  className="col-12"
                  src={instagram}
                  alt=""
                  style={{ width: "50px" }}
                />
              </a>
            </div>
            <div>
              <a href="http://">
                <img
                  className="col-12"
                  src={x}
                  alt=""
                  style={{ width: "50px" }}
                />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100045407825680">
                <img src={facebook} alt="" style={{ width: "50px" }} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center text-light py-3">
            © {new Date().getFullYear()} _rvgowtham, All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
