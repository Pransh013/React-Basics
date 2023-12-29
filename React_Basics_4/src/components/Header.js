import { useState } from "react";

// export const Header = () => (                  Named export
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <div className="header">
        <a href="#">
          <img
            src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
            alt="Logo"
          />
        </a>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>{isLoggedIn ? <button className="login-btn" onClick={() => setIsLoggedIn(false)}>Logout</button> : <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;

// We can just export default one thing
