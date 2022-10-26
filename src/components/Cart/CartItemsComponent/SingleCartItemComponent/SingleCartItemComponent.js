import React from "react";
import "./SingleCartItemComponent.css";
import Badge from "react-bootstrap/Badge";

const SingleCartItemComponent = ({ title, price, desc }) => {
  return (
    <div className="SingleCartItem">
      <div className="Info">
        <div className="InfoInner">
          <span className="Count">1</span>
          <div className="CartTitle">{title}</div>
        </div>

        <div className="CartDesc">{desc}</div>
      </div>

      <div className="ItemPrice">{price},00</div>
    </div>
  );
};

export default SingleCartItemComponent;
