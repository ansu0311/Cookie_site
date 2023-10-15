import React, { useState } from "react";
import "./Header.css";
import Cookie from "../../assets2/cookie.png";
import Logo from "../../assets2/full-logo-white.png";
import Bag from "../../assets2/bag_2662503.png";
import Profile from "../../assets2/user_3177440.png";
import Bars from "../../assets/bars.png";
import { Link as LinkScroll} from "react-scroll";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 426 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="whole">
      <div className="placekeeper">.</div>
      <div className="header">
        <div className="logo_group">
          <img src={Cookie} alt="Cookie Logo" className="cookie_logo" />
          <Link to="/">
            <img src={Logo} alt="Company Logo" className="logo" />
          </Link>
        </div>
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0rem",
              borderRadius: "0,",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{ width: "3vw", height: "3vw" }} />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to="/"
                className="Link_button">Home
              </Link>
            </li>
            <li>
              <LinkScroll
                onClick={() => setMenuOpened(false)}
                to="Bestselling"
                span={true}
                smooth={true}
              >
                Bestselling
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                onClick={() => setMenuOpened(false)}
                to="Offers"
                span={true}
                smooth={true}
              >
                Offers
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                onClick={() => setMenuOpened(false)}
                to="Feedback"
                span={true}
                smooth={true}
              >
                Feedback
              </LinkScroll>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="/menupage"
                className="Link_button">
                Product
              </Link>
            </li>
          </ul>
        )}
        <div className="profile_cart_group">
          <div className="cart_prop">
            <Link 
            onClick={() => setMenuOpened(false)}
            to="/orderpage">
              <img src={Bag} alt="Bag Logo" className="bag_logo" /></Link>
            <div className="cart_value">1</div>
          </div>
          <img src={Profile} alt="Profile Logo" className="profile_logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
