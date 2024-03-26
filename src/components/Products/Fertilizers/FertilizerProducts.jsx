import React from "react";
import Fertilizers from "./Fertilizers";
import './FertilizerProducts.scss'

const FertilizerProducts = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">Fertilizers</div>
      <div className="products">
        <Fertilizers/>
      </div>
    </div>
  );
};

export default FertilizerProducts;