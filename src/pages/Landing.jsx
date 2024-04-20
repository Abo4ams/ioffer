import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import manImg from "../assets/images/ioffer man image.png";
import womanImg from "../assets/images/ioffer woman image.jpg";
import pursesImg from "../assets/images/ioffer purses image.png";
import "./Landing.css";

const mensMainLink = "/categories/mens-fashion";

const womensMainLink = "/categories/women-fashion";

const pursesMainLink = "/categories/bags-purses";

function Landing() {
  return (
    <div>
      <Navbar />
      <div
        className="container d-flex flex-row gap-3 align-items-stretch"
        style={{ marginTop: "5rem", marginBottom: "2rem" }}
      >
        <div className="w-50 h-full">
          <div className="image-container" style={{ marginBottom: "1.7rem" }}>
            <img
              src={manImg}
              alt="Man"
              style={{ width: "100%", height: "50%" }}
            />
            <button
              onClick={(e) => {
                window.location.href = mensMainLink;
              }}
              className="btn"
            >
              SHOP MEN'S
            </button>
          </div>
          <div className="image-container">
            <img
              src={pursesImg}
              alt="purses"
              style={{ width: "100%", height: "50%" }}
            />
            <button
              onClick={(e) => {
                window.location.href = pursesMainLink;
              }}
              className="btn"
            >
              PURSES
            </button>
          </div>
        </div>
        <div className="w-50 h-full">
          <div className="image-container">
            <img src={womanImg} alt="woman" style={{ width: "100%" }} />
            <button
              onClick={(e) => {
                window.location.href = womensMainLink;
              }}
              className="btn"
            >
              SHOP WOMEN'S
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
