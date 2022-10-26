import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SingleCategoryComponent from "./Categories/SingleCategoryComponent";
import "./CategoriesComponent.css";
import axios from "axios";

const categories = [
  { id: 1, name: "Рубашки" },
  { id: 2, name: "Куртки" },
  { id: 3, name: "Белье" },
  { id: 4, name: "Повседневное" },
];

var postData = {
  login: "unitbean-admin",
  password: "unitbean-admin",
};

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

axios
  .post(
    "https://smartorders-api.unitbeandev.com/api/v1/auth/login",
    postData,
    axiosConfig
  )
  .then((res) => {
    console.log("RESPONSE RECEIVED: ", res);
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
  });

const CategoriesComponent = () => {
  return (
    <Col xs={2} className="componentLine MainServiceInner ">
      <div className="Categories">
        {categories.map((сategory) => (
          <Row>
            <SingleCategoryComponent
              isCurrent={сategory.id === 1 ? true : false}
              categoryName={сategory.name}
            />
            <div className="categoryLine"></div>
          </Row>
        ))}
      </div>

      <div className="CategoryFooter">
        <div className="CategoryLogo">Smart Laundry</div>
        <div>Помощь</div>
        <div className="CategoryCopyright">© Smart Laundry, 2005 – 2022</div>
      </div>
    </Col>
  );
};

export default CategoriesComponent;
