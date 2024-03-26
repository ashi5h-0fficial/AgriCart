import React, { useState } from "react";
import "./Fertilizers.scss";
import FertiItems from "./FertiItems";

const Fertilizers = () => {
  const [data, setData] = useState(FertiItems);
  return (
    <>
      {data.map((values) => {
        const { id, title, price, image } = values;
        return (
          <>
            <div className="product-card">
              <div className="thumbnail" key={id}>
                <img src={image} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price} </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Fertilizers;
