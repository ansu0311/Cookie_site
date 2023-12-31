import React, { createContext, useState } from "react";
import all_product from "../data/AllData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let sumTotal = 0;
    all_product.map((e) => {
      let quantity = Number(cartItems[e.id]);
      let price = Number(e.selling);
      if (quantity > 0) {
        if (e.offer && quantity % 2 === 0) {
          sumTotal = Math.round(quantity * price * 0.8);
        } else if (e.offer && quantity > 1) {
          let even_quantity = parseInt(quantity / 2);
          let odd_quantity = quantity - even_quantity * 2;
          let total_cart_value =
            price * odd_quantity + price * 2 * even_quantity * 0.8;
          sumTotal += Math.round(total_cart_value);
        } else {
          sumTotal += Math.round(quantity * price);
        }
      }
    });
    return sumTotal;
  };
  const getTotalCartItem = () => {
    let quantityTotal = 0;
    all_product.map((e) => {
      quantityTotal += Number(cartItems[e.id]);
    });
    return quantityTotal;
  };

  const contextValue = {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
