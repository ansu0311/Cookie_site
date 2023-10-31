import React, { useState , useEffect , useContext } from "react";
import "./Header.css";
import Cookie from "../../assets2/cookie.png";
import Logo from "../../assets2/full-logo-white.png";
import Bag from "../../assets2/bag_2662503.png";
import Profile from "../../assets2/user_3177440.png";
import Bars from "../../assets2/Dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Header = () => {
  const {getTotalCartItem } = useContext(ShopContext);

  const mobile = window.innerWidth <= 426 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="whole">
      <div className="placekeeper">.</div>
      <div className="header">
        <div className="logo_group">
          <img src={Cookie} alt="Cookie Logo" className="cookie_logo" />
          <Link to="/">
            <img src={Logo} alt="Company Logo" className="logo" 
            onClick={() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }} />
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
            <img src={Bars} alt="" className="bar_logo" />
          </div>
        ) : (
          <ul className="header-menu">
            <li onClick={() => {setMenuOpened(false); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
              <Link
                activeclass="active"
                to="/"
                className="Link_button">Home
              </Link>
            </li>
            <li onClick={() => {setMenuOpened(false); ; window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
              <Link
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
            <div className="cart_value">{getTotalCartItem()}</div>
          </div>
          <img src={Profile} alt="Profile Logo" className="profile_logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
