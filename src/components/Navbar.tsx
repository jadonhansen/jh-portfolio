import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.scss";

export default function Navbar() {
	const { pathname } = useLocation();

	return (
		<div className="navWrapper">
			<nav>
				<Link to="/" className={pathname == "/" ? "active" : undefined}>Home</Link>
				<Link to="/tech" className={pathname == "/tech" ? "active" : undefined}>Tech</Link>
				<Link to="/creative" className={pathname == "/creative" ? "active" : undefined}>Creative</Link>
			</nav>
		</div>
	);
}
