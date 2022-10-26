import React from "react";
import Col from "react-bootstrap/Col";

import AddClientComponent from "./Cart/AddClients/AddClientComponent";
import IsExpress from "./Cart/IsExpress/IsExpress";
import CartItemsComponent from "./Cart/CartItemsComponent/CartItemsComponent";
import CartHeader from "./Cart/CartHeader/CartHeader";
import CartFooter from "./Cart/CartFooter/CartFooter";
import './CartComponent.css'
const CartComponent = ({setClientModal}) => {
  
  return (
    <Col xs={2} className="componentLine">
      <div className="CartInner ">
        <div className="CartTop">
          <CartHeader />
          <AddClientComponent setClientModal={setClientModal}/>
          <IsExpress />
        </div>

        <CartItemsComponent />

        <CartFooter />
      </div>
    </Col>
  );
};

export default CartComponent;
