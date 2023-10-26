import React, { useContext } from "react";
import "./Bestselling.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const Bestselling = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Programs flex-column-bestselling" id="Bestselling">
      <div className="programs-header">Our Bestselling Cookies</div>
      <div className="program-categories">
        {all_product.map((item, i) => {
          if (item.bestSeller === true) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                heading={item.heading}
                selling={item.selling}
                bestSeller={item.bestSeller}
                offer={item.offer}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Bestselling;
