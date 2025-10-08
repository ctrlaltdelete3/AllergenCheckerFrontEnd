import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<h2>Wellcome!</h2>
			<p>This is home page</p>
		</>
	);
};

export default Home;
