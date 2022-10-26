import React from "react";
import Row from "react-bootstrap/Row";
import ProductItemComponent from "../ProductItem/ProductItemComponent";
import "./ProductsComponent.css";

const ProductsComponent = ({setItemModal}) => {
  return (
    <div className="productsComponentMain">
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
      <ProductItemComponent setItemModal={setItemModal}/>
    
    </div>
  );
};

export default ProductsComponent;
