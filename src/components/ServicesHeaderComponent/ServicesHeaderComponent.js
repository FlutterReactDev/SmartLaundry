import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HamburgerMenuComponents from "./SubComponents/HamburgerMenuComponent/HamburgerMenuComponents";
import SingleServicesComponent from "../Services/SingleServicesComponent";
import "./ServicesHeaderComponent.css"

const servicesArray = [{'id': 1, 'name': "Химчистка"}, {'id': 2, 'name': "Прачка"}, {'id': 3, 'name': "Ковры"} ]
//TODO Николай
//сделавыть вызов тут и получения севисов
const ServicesHeaderComponent = (proos) => {
  return (
      // <div >
          <Row className="serviceHeader">
              <Col>
                <HamburgerMenuComponents/>
              </Col>
              {servicesArray.map(serviceItem => (
              <Col>
                    <SingleServicesComponent serviceName={serviceItem.name}/>
              </Col>
              ))}
          </Row>
      // </div>
  )
}

export default ServicesHeaderComponent