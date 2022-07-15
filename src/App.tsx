import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
import LinksBar from "./components/LinksBar";
import "./styles/app.scss";

function App() {
	const [pages, setPages] = useState({ current: "home", previous: "home" });

	const changePage = (page: string) => {
		const prev = pages.previous;

		setPages({ current: page, previous: prev });
	};

	return (
		<div className="appContainer">
			<Navbar changePage={changePage} pages={pages} />
			<LinksBar />
			<Navigation pages={pages} />
		</div>
	);
}

export default App;
