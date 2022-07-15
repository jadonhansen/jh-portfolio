import React from "react";

import "../styles/navbar.scss";

export default function Navbar(props: any) {
	const changePage = props.changePage;
	const { current, previous } = props.pages;

	return (
		<div className="navWrapper">
			<nav>
				<a onClick={() => changePage("home")} className={current == "home" ? "active" : undefined}>Home</a>
				<a onClick={() => changePage("tech")} className={current == "tech" ? "active" : undefined}>Tech</a>
				<a onClick={() => changePage("creative")} className={current == "creative" ? "active" : undefined}>Creative</a>
			</nav>
		</div>
	);
}
