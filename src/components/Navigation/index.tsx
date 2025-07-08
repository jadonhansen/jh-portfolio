import React from "react";

import { ComponentProps } from "../../types/interfaces";
import Creative from "../Creative";
import Home from "../Home";
import Tech from "../Tech";

export default function Navigation(props: ComponentProps) {

	return (
		<div style={{ display: "flex", width: "100vw", overflow: "hidden" }}>
			<Home current={ props.current } previous={ props.previous } />
			<Tech current={ props.current } previous={ props.previous }  />
			<Creative current={ props.current } previous={ props.previous }  />
		</div>
	);
}
