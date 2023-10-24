import React from "react";
import "./Menu.css";
import { menuData } from "../../data/menuData";
import plus from "../../assets2/plus.png";
import tape from "../../assets3/entry tape.png";
import tape2 from "../../assets3/end tape.png";

const useMenu = () => {
  return (
    <div className="menu" id="Offers">
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
    </div>
  );
};

export default useMenu;
