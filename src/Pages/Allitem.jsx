import React, { useContext } from "react";
import "./CSS/Allitem.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../components/Item/Item";
import tape from "../assets3/entry tape.png";
import tape2 from "../assets3/end tape.png";

const Menupage = () => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className="menu" id="Offers">
      <div className="menu-header">Our Signature Cookie Assortment</div>
      <div className="tape_join">
        <img src={tape} alt="Brand Tape" />
      </div>
    <div className="all-products">
      <div className="container">
        {all_product.map((item, i) => {
          if( item.id >= 0){return <Item
              key={i}
              id={item.id}
              image={item.image}
              heading={item.heading}
              selling={item.selling}
              bestSeller={item.bestSeller}
              offer={item.offer}
            />}
            else{
              return null;
            }
        })} 
      </div>
    </div>
    <div className="tape_join">
        <img src={tape2} alt="Brand Tape" />
      </div>
    </div>
  );
};

export default Menupage;
