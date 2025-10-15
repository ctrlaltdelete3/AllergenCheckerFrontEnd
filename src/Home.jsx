import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="home">
      <h1>Welcome to the Allergen Checker App 🌿</h1>
      {currentUser ? (
        <>
          <h2>Hello, {currentUser.email}!</h2>
          <p>
            You can now manage your allergens or check some products to see if
            they are safe for you to use!
          </p>
          <div className="btn-group">
            <Link to="/myallergens" className="btn">
              My Allergens
            </Link>
            <br></br>
            <Link to="/checkproduct" className="btn">
              Check Product
            </Link>
            <br></br>
            <button onClick={handleLogout} className="btn logout">
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>Please login or register to start using the app.</h3>
          <div className="btn-group">
            <Link to="/login" className="btn">
              Login
            </Link>
            <br></br>
            <Link to="/newuser" className="btn">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
