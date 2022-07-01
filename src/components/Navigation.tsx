import React from "react";
import { Routes, Route } from "react-router-dom";

import Creativity from "../pages/Creativity";
import Home from "../pages/Home";
import Tech from "../pages/Tech";

export default function Navigation() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tech" element={<Tech />} />
			<Route path="/creativity" element={<Creativity />} />
		</Routes>
	);
}
