import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
import LinksBar from "./components/LinksBar";
import "./styles/app.scss";

function App() {
	return (
		<div className="appContainer">
			<Navbar />
			<LinksBar />
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
