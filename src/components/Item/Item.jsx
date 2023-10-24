import React from "react";
import "./Item.css";
import right_arrow from '../../assets2/right-arrow.png'
const Item = (props) => {
  return (
    <div>
      <div className="flex-column-bestselling category1">
        <img src={props.image} alt="loko" />
        <div className="flex-column-bestselling text_child">
          <div className="Cookie_heading">{props.heading}</div>
          <div className="Cookie_heading for-best">For</div>
          <div className="Cookie_heading price_cookie">
            {"Rs. " + props.selling}
          </div>
        </div>
        <div className="flex-column-bestselling circle_button">
          <img src={right_arrow} className="custom_button" alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Item;
