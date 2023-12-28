
// export const Header = () => (                  Named export
const Header = () => {

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
        </ul>
      </div>
    </>
  );
};

export default Header;

// We can just export default one thing
