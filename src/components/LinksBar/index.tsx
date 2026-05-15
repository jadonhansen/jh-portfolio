import React from "react";

import { FaLinkedin } from "react-icons/fa";

import "./index.scss";


export default function LinksBar() {

	return (
		<div className={"links-bar"}>
			<a href="https://www.linkedin.com/in/jadonhansen/" target="_blank" rel="noreferrer">
				<FaLinkedin
					className="img"
					color="grey"
					size={22}
				/>
			</a>
		</div>
	);
}
