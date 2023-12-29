import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets2/minus.png";
import add_icon from "../../assets2/plus.png";
import { useState } from "react";

const Cart = () => {

  const [discount,setDiscount] = useState(false)
  const [promoCode,setPromoCode] = useState("")

  const handleInput = () => {
    let text = promoCode.toUpperCase()
    console.log(text)
    if ((text === "KUNU") || (text === "SENPO")) {
      setDiscount(true)
    } else {
      setDiscount(false)
    }
  };

  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  } = useContext(ShopContext);

  const Money = (qunatity, price, condition) => {
    if (condition && Number(qunatity) % 2 === 0) {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textDecoration: "l", fontSize: "1vw" }}>
            <s>
              Rs.{" "}
              <span className="fontchange">{Math.round(qunatity * price)}</span>
            </s>
          </div>
          <div style={{ fontSize: "1vw" }}>
            Rs.{" "}
            <span className="fontchange">
              {Math.round(qunatity * price * 0.8)}
            </span>
          </div>
        </div>
      );
    } 
    else if(condition && Number(qunatity)>1){
      let num_qunat = Number(qunatity);      
      let even_quantity = parseInt(num_qunat / 2)
      let odd_quantity = num_qunat - (even_quantity*2)
      let total_cart_value = (price * odd_quantity) + (price * 2 * even_quantity * 0.8)
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textDecoration: "l", fontSize: "01vw" }}>
            <s>
              Rs.{" "}
              <span className="fontchange">{Math.round((num_qunat) * price)}</span>
            </s>
          </div>
          <div style={{ fontSize: "1vw" }}>
            Rs.{" "}
            <span className="fontchange">
              {Math.round(total_cart_value)}
            </span>
          </div>
        </div>
      );
    }
    else {
      return (
        <div style={{ fontSize: "1vw" }}>
          Rs. <span className="fontchange">{Math.round(qunatity * price)}</span>
        </div>
      );
    }
  };

  let subtotal = getTotalCartAmount();

  const TotalBill = (subtotal,promo,disco) => {
    if (subtotal >= 1000) {
      return subtotal;
    }
    else if (disco && ((promo === "KUNU") || (promo === "SENPO"))){
      return 0;
    }
     else {
      return subtotal + 199;
    }
  };

  return (
    <div>
      <div className="Heading_cart">Cart [ {getTotalCartItem()} ]</div>
      <div className="cartitems">
        <div className="cartitems-left">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Modify</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div>
                  <div className="cartitems-format cartitems-format-main">
                    <p>
                      <img
                        src={e.image}
                        alt=""
                        className="carticon-product-icon"
                      />
                    </p>
                    <p>{e.heading}</p>
                    <p className="fontchange">{e.selling}</p>
                    <p className="fontchange">{cartItems[e.id]}</p>
                    <p className="fontchange2">{Money(cartItems[e.id], e.selling, e.offer)}</p>
                    <p>
                      <div className="buttons_cont">
                        <img
                          className="cartitems-icon"
                          src={remove_icon}
                          onClick={() => {
                            removeFromCart(e.id);
                          }}
                          alt=""
                        />
                        <img
                          className="cartitems-icon"
                          src={add_icon}
                          onClick={() => {
                            addToCart(e.id);
                          }}
                          alt=""
                        />
                      </div>
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <hr />
        </div>
        <div className="cartitems-right">
          <div className="right_cont">
            <div className="cartitems-total">
              <h1>cart total</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>
                    Rs. <span className="fontchange">{subtotal}</span>
                  </p>
                </div>
                <div className="cartitems-total-item">
                  <p>Shopping Fee</p>
                  <p className="fontchange">{subtotal > 1000 ? "Free" :`199`}</p>
                </div>
                { discount && (<div className="cartitems-total-item">
                  <p>Promo Code</p>
                  <p>{promoCode.toUpperCase()}</p>
                </div>)}
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  <h3>
                    Rs.{" "}
                    <span className="fontchange">{TotalBill(subtotal,promoCode.toUpperCase(),discount)}</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="cart_checkout">
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" onChange={e=>setPromoCode(e.target.value)}/>
                <button className="cartitems_button" onClick={() => handleInput()}>Submit</button>
              </div>
              <button className="cart_checkout_button">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
