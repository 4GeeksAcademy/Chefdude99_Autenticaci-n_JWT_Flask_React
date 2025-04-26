import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
	const navigate = useNavigate()
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Proyecto de Autenticar</span>
				</Link>
				<div className="bottons">
					<>
						<button className="btn btn-primary">Sign Up</button>
					</>
					<>
						<button className="btn btn-primary" onClick={() => { navigate("/login") }}>Login</button>
					</>
				</div>
			</div>
		</nav>
	);
};