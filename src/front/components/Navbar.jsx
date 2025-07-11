import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const navigate = useNavigate();

	useEffect(() => {
	}, [store.currentUser])
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Proyecto de Autenticación</span>
				</Link>
				<div className="ml-auto">
					{store.currentUser == null &&
						<>
							<button className="btn btn-success me-3"
								onClick={() => { navigate("/login") }}>Iniciar sesion</button>
							<button className="btn btn-primary"
								onClick={() => { navigate("/register") }}>Registrate</button>
						</>
					}
					{store.currentUser && <button className="btn btn-danger" onClick={() => {
						localStorage.removeItem("token")
						dispatch({
							type: "set_current_user",
							payload: null
						})
						navigate("/")


					}}>Cerrar sesión</button>}
				</div>
			</div>
		</nav>
	);
};