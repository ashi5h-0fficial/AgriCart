import React from "react";
import Seeds from './Seeds';
import './SeedsProduct.scss';

const SeedsProduct = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">Seeds</div>
      <div className="products">
        <Seeds/>
      </div>
    </div>
  );
};

export default SeedsProduct;
