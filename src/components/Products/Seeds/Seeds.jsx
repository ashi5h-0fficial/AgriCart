import React, { useState } from "react";
import "./Seeds.scss";
import Seeditems from "./Seeditems";


const Seeds = () => {
  const [data, setData] = useState(Seeditems);
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

export default Seeds;
