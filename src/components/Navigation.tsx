import React from "react";

import { ComponentProps } from "../interfaces/interfaces";
import Creative from "../pages/Creative";
import Home from "../pages/Home";
import Tech from "../pages/Tech";

export default function Navigation(props: ComponentProps) {

	return (
		<div style={{ display: "flex", width: "100vw", overflow: "hidden" }}>
			<Home current={ props.current } previous={ props.previous } />
			<Tech current={ props.current } previous={ props.previous }  />
			<Creative current={ props.current } previous={ props.previous }  />
		</div>
	);
}
