import React from "react";
import './SingleCategoryComponent.css';

const SingleCategoryComponent = (props) => {

  function fillBG(e) {
    e.target.style.background = "#EEEFF4";
  }
  function unFillBG(e) {
    if (props.isCurrent != true) {
      e.target.style.background = 'white';
    }
  }

  return (
        <div onMouseOver={fillBG}
             onMouseLeave={unFillBG}
             className={"categoryContainer " + (props.isCurrent ? 'selectedCategory' : '') }>{props.categoryName}</div>

  )
}

export default SingleCategoryComponent