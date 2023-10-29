import React, { useContext } from "react";
import "../../components/ProductDisplay/ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets2/minus.png";
import add_icon from "../../assets2/plus.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart , cartItems , removeFromCart } = useContext(ShopContext);

  return (
    <div className="productContainer">
      <div className="productdisplay-center">
        <div className="productdisplay-left">
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.heading}</h1>
          <div className="productdisplay-right-prices">
              Rs. {product.selling}
          </div>
          <div className="productdisplay-right-description">
          {product.discription}
          </div>
                <div className="button_holder">
          <button onClick={() => { addToCart(product.id);}} hidden={cartItems[product.id]>0?"hidden":""}>
            ADD TO CART</button>
            <div className="button_series">
            <button onClick={() => { removeFromCart(product.id);}} hidden={cartItems[product.id]>0?"":"hidden"}>
              <img src={remove_icon} alt="" /></button>
              <button hidden={cartItems[product.id]>0?"":"hidden"}>
                {cartItems[product.id]}</button>
              <button onClick={() => { addToCart(product.id);}} hidden={cartItems[product.id]>0?"":"hidden"}>
                <img src={add_icon} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
