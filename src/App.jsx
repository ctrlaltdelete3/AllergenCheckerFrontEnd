import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import NewUser from "./NewUser";

function App() {
	return (
		<>
			<Router>
				<div className="App">
					<Navbar />
					<div className="content">
						<Routes>
							<Route exact path="/" element={<Home />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/newuser" element={<NewUser />}></Route>
						</Routes>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
