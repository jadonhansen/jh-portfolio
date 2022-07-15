import React, { useState } from "react";

import { ComponentProps } from "./interfaces/interfaces";
import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
import LinksBar from "./components/LinksBar";
import "./styles/app.scss";

function App() {
	const [pages, setPages] = useState({ current: "home", previous: "home" } as ComponentProps);

	const changePage = (page: string) => {
		const prev = pages.previous;

		setPages({ current: page, previous: prev });
	};

	return (
		<div className="appContainer">
			<Navbar current={ pages.current } previous={ pages.previous } changePage={ changePage } />
			<LinksBar />
			<Navigation current={ pages.current } previous={ pages.previous } />
		</div>
	);
}

export default App;
