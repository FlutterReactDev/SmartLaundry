import React from "react";
import { Card } from "react-bootstrap";

import "./ProductItemComponent.css";

const ProductItemComponent = ({ setItemModal }) => {
  return (
    <Card className="productItemMain" style={{ width: "14rem" }}>
      <Card.Body>
        <span className="productItemTitle">Услуга</span>

        <div className="productItemCounterBlock">
          <div className="minusButtonInitial"></div>
          <span className="counterLabel counterElements">01</span>
          <div
            className="plusButtonInitial counterElements"
            onClick={() => setItemModal(true)}
          ></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItemComponent;
