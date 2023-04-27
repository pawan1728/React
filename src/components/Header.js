// import { LOGO_URL } from "../Utils/constants";
import logo from "../assests/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <nav className="nav-container">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Service</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <li>Cart</li>
            <Link to="/instamart">
              <li>Instamart</li>
            </Link>
            {isLoggedIn ? (
              <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={(e) => setIsLoggedIn(true)}>Login</button>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
