import React from "react";
import './PesticideProducts.scss';
import Pesticides from "./Pesticides";

const PesticideProducts = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">Pesticides</div>
      <div className="products">
        <Pesticides/>
      </div>
    </div>
  );
};

export default PesticideProducts;