import React from "react";

import "../styles/linksbar.scss";

export default function LinksBar() {
	return (
		<div className="links-bar">
			<a href="https://twitter.com/JadonHansen" target="_blank" rel="noreferrer">
				<img src={require("../assets/icons/twitter.png")} />
			</a>
			<a href="https://www.linkedin.com/in/jadonhansen/" target="_blank" rel="noreferrer">
				<img src={require("../assets/icons/linkedin.png")} />
			</a>
		</div>
	);
}
