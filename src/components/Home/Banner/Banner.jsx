import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>FARM</h1>
          <p>
            A FARM IS MORE THAN LAND AND CROPS. IT IS A FAMILY'S HERITAGE AND
            FUTURE.
          </p>
          <div className="ctas">
            <div className="banner-cta"><Link to="/footer" style={{ textDecoration: "none", color: 'green'}}>Read More</Link></div>
            <div className="banner-cta v2">
              <Link to="/category" style={{ textDecoration: "none", color: 'green'}}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
