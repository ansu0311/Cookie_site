import React from "react";
import "./cart.css";
import { cartData } from "../../data/cartData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import tape from "../../assets3/entry tape.png";
import tape2 from "../../assets3/end tape.png";

const useCart = () => {
  var sum_total = 0;
  cartData.map((program) => {
    var price_each = 0;
    price_each = program.quntity * program.selling;
    sum_total += price_each;
    return sum_total
  });
  return (
    <div className="cart" id="Offers">
      <Header />
      <div className="cart-header">Thank You for the purchase</div>
      <div className="tape_join">
        <img src={tape} alt="Brand Tape" />
      </div>
      <div className="cart-categories">
        {cartData.map((program) => (
          <div className="cart_box">
            <div className="cart1">
              <img src={program.image} alt="loko" />
              <div className="name_price_cart">
                <div className="Cookie_cart">{program.heading}</div>
                <div className="item_details">
                  <div className="cart_selling_detail">
                    <div className="Cookie_cart for_cart"> Price</div>
                    <div className="Cookie_cart price_cart">
                      {"Rs. " + program.selling}
                    </div>
                  </div>
                  <div className="cart_selling_detail">
                    <div className="Cookie_cart for_cart"> Quantity</div>
                    <div className="Cookie_cart price_cart">
                      {program.quntity}
                    </div>
                  </div>
                  <div className="cart_selling_detail">
                    <div className="Cookie_cart for_cart"> Tatal</div>
                    <div className="Cookie_cart price_cart">
                      {"Rs. " + program.quntity * program.selling}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="email-container-cart">
          <div className="cost-container-cart">{"Total: Rs\t" + sum_total}</div>
          <button className="btn btn-j btn-cart">Pay Now</button>
        </div>
      </div>

      <div className="tape_join">
        <img src={tape2} alt="Brand Tape" />
      </div>
      <Footer />
    </div>
  );
};

export default useCart;
