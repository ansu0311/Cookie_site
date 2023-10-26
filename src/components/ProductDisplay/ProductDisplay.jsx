import React, { useContext } from "react";
import "../../components/ProductDisplay/ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart , cartItems } = useContext(ShopContext);

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
            product descripion
          </div>
          <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
