import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/AgriPro.webp"
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch}) => {

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"/>
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">AgriPro 16L Knapsack Manual Sprayere</span>
              <span className="desc">Good to use for small size field and garden</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
