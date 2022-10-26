import React from "react";
import "./isExpress.css";
import Row from "react-bootstrap/Row";

import Switch from "./Switch/Switch";

const IsExpress = (props) => {
  return (
    <Row className="isExpress">
      <div className="ExpressInner">
        <div className="cartHeaderTitle">Экспресс</div>
        <Switch />
      </div>
    </Row>
  );
};

export default IsExpress;
