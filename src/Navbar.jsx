import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>Allergen Checker App</h3>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
