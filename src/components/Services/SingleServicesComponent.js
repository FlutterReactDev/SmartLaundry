import React from "react";
import "./SingleServicesComponent.css"

const SingleServicesComponent = (props) => {
  return (
      <div className="singleService">
        {props.serviceName}
      </div>
  )
}

export default SingleServicesComponent