import React from "react";
import './EquipmentProducts.scss';
import Equipment from './Equipment';
const EquipmentProducts = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">Equipments</div>
      <div className="products">
        <Equipment/>
      </div>
    </div>
  );
};

export default EquipmentProducts;