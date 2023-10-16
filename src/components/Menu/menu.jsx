import React, { useState } from "react";
import "./menu.css";
import { menuData } from "../../data/menuData";
import plus from "../../assets2/plus.png";
import minus from "../../assets2/minus.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import tape from "../../assets3/entry tape.png";
import tape2 from "../../assets3/end tape.png";

const useMenu = () => {
  let [menu, setmenu] = useState(menuData);
  const [cartCourses, setCartCourses] = useState([]);

  const addCourseToCartFunction = (selected) => {
    const alreadyCourses = cartCourses
                           .find(item => item.product.heading === selected.heading);
    if (alreadyCourses) {
        const latestCartUpdate = cartCourses.map(item =>
            item.product.heading === selected.heading ? { 
            ...item, quantity: item.quantity + 1 } 
            : item
        );
        setCartCourses(latestCartUpdate);
    } else {
        setCartCourses([...cartCourses, {product: selected, quantity: 1}]);
    }
};
const deleteCourseFromCartFunction = (selected) => {
  const updatedCart = cartCourses
                      .filter(item => item.product.heading !== selected.heading);
  setCartCourses(updatedCart);
};
const totalAmountCalculationFunction = () => {
  return cartCourses
         .reduce((total_price, item) => total_price + item.product.selling * item.quantity, 0);
};
const totalQunatityCalculationFunction = () => {
  return cartCourses
         .reduce((total_quantity, item) => total_quantity + item.quantity, 0);
};

  return (
    <div className="menu" id="Offers">
      <Header />
      <div className="menu-header">Our Signature Cookie Assortment</div>
      <div className="tape_join">
        <img src={tape} alt="Brand Tape" />
      </div>
      <div className="menu-categories">
        {menu.map((program) => (
          <div className="menu_box">
            <div className="menu1">
              <img src={program.image} alt="loko" />
              <div className="name_price">
                <div className="Cookie_menu">{program.heading}</div>
                <div className="side__menu">
                  <div>
                    <div className="Cookie_menu for_menu"> For</div>
                    <div className="Cookie_menu price_menu">
                      {"Rs. " + program.selling}
                    </div>
                  </div>
                  <div>
                    <div className="counter">
                      <div className="circle_menu" onClick={() => deleteCourseFromCartFunction(program)}>
                        <img src={minus} alt="right arrow" />
                      </div>
                      <div className="circle_menu" onClick={() => addCourseToCartFunction(program)}>
                        <img src={plus} alt="right arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className=" test_box menu1">
            <div className=" ">Total Amount: 
                ₹{totalAmountCalculationFunction()}
            </div>
            <div className="">Total Qunatity: 
                {totalQunatityCalculationFunction()}
            </div>
        </div>
    <div className="tape_join">
        <img src={tape2} alt="Brand Tape" />
      </div>
      <Footer />
    </div>
  );
};

export default useMenu;
