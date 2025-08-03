import { useState } from "react";

const NewUser = () => {
	const [username, setUsername] = useState("");
	const [firstname, setFirstname] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = () => {
		const user = { firstname, surname, email, username, password };
	};

	return (
		<div className="create">
			<h2>Wellcome to Allergen Checkher App.</h2>
			<h2>Please fill out this form to register.</h2>
			<form onSubmit={handleSubmit}>
				<label>Enter your firstname</label>
				<input
					type="text"
					required
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
				/>
				<label>Enter your surname</label>
				<input
					type="text"
					required
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>
				<label>Enter your email</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Enter your user</label>
				<input
					type="text"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Enter your password</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default NewUser;
