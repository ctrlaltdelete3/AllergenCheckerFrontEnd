import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validEmail = /\S+@\S+\.\S+/.test(email);
  const validPassword = password.length >= 8;
  const formValid = validEmail && validPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };

    if (!formValid) {
      alert(
        "Incorrect email or password form. Please try again before sumbitting!"
      );
      return;
    }
    try {
      const res = await fetch("https://localhost:44305/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || `Error ${res.status}`);
      }

      const data = await res.json();
      console.log("Login success!", data);
      localStorage.setItem("currentUser", JSON.stringify({ email: email }));
      alert("Welcome " + email + " !");
      navigate("/");
    } catch (err) {
      console.error("Login failed: ", err);
      alert("Login failed: " + err.message);
    }
  };
  return (
    <div className="login">
      <h2>Wellcome to Allergen Checkher App.</h2>
      <h2>Please fill out this form to login.</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter you email</label>
        <input
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label>Enter your password</label>
        <input
          type="password"
          autoComplete="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <br></br>
        <br></br>
        <button type="submit" disabled={!formValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
