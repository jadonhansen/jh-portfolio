import React from "react";

import Creative from "../pages/Creative";
import Home from "../pages/Home";
import Tech from "../pages/Tech";

export default function Navigation(props: any) {
	const pages = props.pages;

	return (
		<div style={{ display: "flex", width: "100vw", overflow: "hidden" }}>
			<Home pages={pages} />
			<Tech pages={pages} />
			<Creative pages={pages} />
		</div>
	);
}
