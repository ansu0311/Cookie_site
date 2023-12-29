import React, { useEffect } from "react";
import "./Item.css";
import right_arrow from "../../assets2/right-arrow.png";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const Item = (props) => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <div className="flex-column-bestselling category1">
      <LazyLoad className="cookie_img" threshold={0.95}>
        <div className="cookie_img" ><img src={props.image} alt="loko" /></div>
        </LazyLoad>
        <div className="flex-column-bestselling text_child">
          <div className="Cookie_heading">{props.heading}</div>
          <div className="Cookie_heading for-best">For</div>
          <div className="Cookie_heading price_cookie">
            {"Rs. " + props.selling}
          </div>
        </div>
        <Link to={`/product/${props.id}`} className="circle_position">
          <div className="flex-column-bestselling circle_button" onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} >
            <img
              src={right_arrow}
              className="custom_button"
              alt="right arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
