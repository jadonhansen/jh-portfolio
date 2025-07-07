import React from "react";

import { ComponentProps } from "../../types/interfaces";
import Creative from "../../app/Creative";
import Home from "../../app/Home";
import Tech from "../../app/Tech";

export default function Navigation(props: ComponentProps) {

	return (
		<div style={{ display: "flex", width: "100vw", overflow: "hidden" }}>
			<Home current={ props.current } previous={ props.previous } />
			<Tech current={ props.current } previous={ props.previous }  />
			<Creative current={ props.current } previous={ props.previous }  />
		</div>
	);
}
