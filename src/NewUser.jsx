import { useState } from "react";

const NewUser = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = { email, username, password };

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
			alert ("User registered successfully!");

		}
		catch(err) {
			console.error("Registration failed: ", err);
			alert("Failed: " + err.message);
		}
	};

	return (
		<div className="create">
			<h2>Wellcome to Allergen Checkher App.</h2>
			<h2>Please fill out this form to register.</h2>
			<form onSubmit={handleSubmit}>
				<label>Enter your email</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br></br>
				<label>Enter your username</label>
				<input
					type="text"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br></br>
				<label>Enter your password</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br></br>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default NewUser;
