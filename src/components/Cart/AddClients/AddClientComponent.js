import React from "react";
import Row from "react-bootstrap/Row";
import "./AddClientComponent.css";
import AddIcon from "./Add.svg";
const AddClientComponent = ({ setClientModal }) => {
  return (
    <Row className="addClient">
      <div className="addClientInner">
        <div className="cartHeaderTitle">Клиент</div>
        <div onClick={() => setClientModal(true)} className="addClientButton">
          <img src={AddIcon} alt="add" />
        </div>
      </div>
    </Row>
  );
};

export default AddClientComponent;
