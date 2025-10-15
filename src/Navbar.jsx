import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Allergen CHecker</Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        {currentUser && (
          <>
            <li>
              <NavLink to="/myallergens">My Allergens</NavLink>
            </li>
            <li>
              <NavLink to="/checkproduct">Check Product</NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="nav-right">
        {currentUser ? (
          <>
            <span className="user">Hello, {currentUser.email}</span>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn secondary" to="/login">
              Login
            </NavLink>
            <NavLink className="btn" to="/newuser">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
