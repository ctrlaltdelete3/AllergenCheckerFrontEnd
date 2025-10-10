import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// TODO: clear login form after successfull register OR send to "home" page
const NewUser = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const navigation = useNavigate();

	const rules = useMemo(() => {
		const hasMinLen = password.length >= 8;
		const hasNumber = /[0-9]/.test(password);
		const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
		const match = hasMinLen && password === password2;
		return {hasMinLen, hasNumber, hasSpecialChar, match}
	}, [password, password2]);

	const formValid = 
	email.trim() &&
	rules.hasMinLen &&
	rules.hasNumber &&
	rules.hasSpecialChar &&
	rules.match;

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const user = { email, password };

		if(!formValid){
			alert("Please fix the errors before submitting!");
			return;
		}
		try {
			const res = await fetch("https://localhost:44305/api/user/register", 
			{
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(user)
			});

			if(!res.ok){
				const errorText = await res.text();
				throw new Error(errorText || `Error ${res.status}`);
			}

			const data = await res.json();
			console.log("User created: ", data);
			localStorage.setItem("currentUser", JSON.stringify({email: email}));
			alert ("User registered successfully!");
			navigation("/");

		}
		catch(err) {
			console.error("Registration failed: ", err);
			
			alert("Failed: " + err.message);
		}
	};
	const Rule = ({ ok, text }) => (
    <li style={{ listStyle: "none", margin: 2 }}>
      <span>{ok ? "✅" : "❌"}</span> {text}
    </li>
  );

	return (
		<div className="create">
			<h2>Wellcome to Allergen Checkher App.</h2>
			<h2>Please fill out this form to register.</h2>
			<form onSubmit={handleSubmit}>
				<label>Enter your email</label>
				<input
					type="email"
					autoComplete="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br></br>
				{/* <p className="italic-text">Please make sure that password has at least 8 characters.<br></br>Also, there should be minimum of 1 number and 1 special character.</p> */}
				<label>Enter your password</label>
				<input
					type="password"
					autoComplete="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br></br>
				<label>Please repeat your password</label>
				<input
					type="password"
					autoComplete="password"
					requiredSSS
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
				/>
				<br></br>

				 <div id="pw-rules" style={{ marginTop: 8, fontSize: 14 }}>
					<br></br>
					<strong>Password must contain:</strong>
					<br></br>

					<ul style={{ paddingLeft: 0, marginTop: 6 }}>
						<Rule ok={rules.hasMinLen}  text="at least 8 characters" />
						<Rule ok={rules.hasNumber}  text="at least one number (0–9)" />
						<Rule ok={rules.hasSpecialChar} text="at least one special character (!@#$…)" />
						<Rule ok={rules.match}      text="passwords match" />
					</ul>
        		</div>
				<button type="submit" disabled={!formValid}>Register</button>
			</form>
		</div>
	);
};

export default NewUser;
