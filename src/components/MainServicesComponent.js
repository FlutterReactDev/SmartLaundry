import React from "react";
import Col from "react-bootstrap/Col";
import ServicesHeaderComponent from "./ServicesHeaderComponent/ServicesHeaderComponent";
import ProductsComponent from "./Products/ProductsComponent";
import ServiceFooterComponent from "./ServiceFooterComponent/ServiceFooterComponent";

const CategoriesComponent = ({setItemModal}) => {
  return (
    <Col className="componentLine MainServiceInner" fluid={true} xs={8}>
      <ServicesHeaderComponent /> 
      <div className="productsComponentMainInner">
        <ProductsComponent setItemModal={setItemModal}/>
      </div>
      <ServiceFooterComponent />
    </Col>
  );
};

export default CategoriesComponent;
