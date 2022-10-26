import React from "react";
import "./CartItemsComponent.css";
import SingleCartItemComponent from "./SingleCartItemComponent/SingleCartItemComponent";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

const cartArray = [
  { id: 1, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 2, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 3, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 4, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 5, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 6, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 7, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 8, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 9, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 10, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id: 11, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id:  12, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
  { id:  13, title: "Рубашки", desc: "Стирка Глажка", price: 1000 },
];

const CartItemsComponent = (props) => {
  return (
    <Row className="CartItemsArea">
      {cartArray.map((cartItem) => (
        <SingleCartItemComponent key={cartItem.id} {...cartItem} />
      ))}
    </Row>
  );
};

export default CartItemsComponent;
