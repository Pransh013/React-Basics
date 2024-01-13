import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {user} = useContext(UserContext)
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
            alt="Logo"
          />
        </Link>
        <ul>
          <Link to="/" className="nounderline">
            <li>Home</li>
          </Link>
          <Link to="/about" className="nounderline">
            <li>About</li>
          </Link>
          <Link to="/contact" className="nounderline">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="nounderline">
            <li>Cart</li>
          </Link>
          <Link to="/instamart" className="nounderline">
            <li>Instamart</li>
          </Link>
          <li className="nounderline">{user.name}</li>
          <li>
            {isLoggedIn ? (
              <button
                className="login-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;