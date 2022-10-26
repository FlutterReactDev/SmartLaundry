import React from "react";
import "./CartHeader.css";
import Row from "react-bootstrap/Row";
import SearchIcon from "./Search.svg";
const CartHeader = (props) => {
  return (
    <Row className="cartHeader">
      <div className="cartHeaderInner">
        <div className="cartHeaderTitle">Поиск</div>
        <div className="cartHeaderSearch">
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
    </Row>
  );
};

export default CartHeader;
