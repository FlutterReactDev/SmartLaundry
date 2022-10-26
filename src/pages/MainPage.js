import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CategoriesComponent from "../components/CategoriesComponent";
import MainServicesComponent from "../components/MainServicesComponent";
import CartComponent from "../components/CartComponent";
import ClientModal from "../components/ClientModal/CientModal";
import ItemModal from "../components/ItemModal/ItemModal";
import { useState } from "react";

function MainPage() {
  const [clientModal, setClientModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);
  return (
    <Container fluid={true}>
      <Row>
        <CategoriesComponent />
        <MainServicesComponent setItemModal={setItemModal} />
        <CartComponent setClientModal={setClientModal} />
      </Row>
      <ClientModal setClientModal={setClientModal} show={clientModal} />
      <ItemModal setItemModal={setItemModal} show={itemModal} />
    </Container>
  );
}

export default MainPage;
