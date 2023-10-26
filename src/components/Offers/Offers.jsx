import React, { useContext } from "react";
import "./Offers.css";
import right_arrow from "../../assets2/right-arrow.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Reasons = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Reasons" id="Offers">
      <div className="Reasons-header">Offers and Gifts</div>
      <div className="Reasons-categories">
        {all_product.map((item, i) => {
          if (item.offer === true) {
            return (
              <div key={i} className="reason_box">
                <div className="Reasons1">
                  <img src={item.image} alt="loko" />
                  <div className="Cookie_reason">{item.heading}</div>
                  <div>
                    <div className="Cookie_reason for">
                      <span className="number_item">2</span> For
                    </div>
                    <div className="Cookie_reason line_though price_reason">
                      {"Rs. " + Math.round(item.selling * 2)}
                    </div>
                    <div className="Cookie_reason price_reason">
                      {"Rs. " + Math.round(item.selling * 2 * 0.8)}
                    </div>
                  </div>
                </div>
          <Link to={`/product/${item.id}`}>

                <div className="Reasons circle_reason">

                  <img src={right_arrow} alt="right arrow" />

                </div>
          </Link>

              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Reasons;
