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
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <div className="menu" id="Offers">
      <Header />
      <div className="menu-header">Our Signature Cookie Assortment</div>
      <div className="tape_join">
        <img src={tape} alt="Brand Tape" />
      </div>
      <div className="menu-categories">
        {menuData.map((program) => (
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
                      <div className="circle_menu" onClick={decrementCount}>
                        <img src={minus} alt="right arrow" />
                      </div>
                      <div className="circle_menu">{count}</div>
                      <div className="circle_menu" onClick={incrementCount}>
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
      <div className="tape_join">
        <img src={tape2} alt="Brand Tape" />
      </div>
      <Footer />
    </div>
  );
};

export default useMenu;
