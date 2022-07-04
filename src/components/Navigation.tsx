import React from "react";
import { Routes, Route } from "react-router-dom";

import Creative from "../pages/Creative";
import Home from "../pages/Home";
import Tech from "../pages/Tech";

export default function Navigation() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tech" element={<Tech />} />
			<Route path="/creative" element={<Creative />} />
		</Routes>
	);
}
