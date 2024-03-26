
import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

const Home = () => {

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category/>
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;
