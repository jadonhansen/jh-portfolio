import React from "react";

import "../styles/home.scss";

export default function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>This is me.</h1>
				</div>
				<div className="col-6 col-content">
					<div className="curve"></div>
					<div className="labels">
						<p>Developer</p>
						<p>Creator</p>
						<p>Enthuisiast</p>
						<p>Surfer</p>
						<p>Human</p>
					</div>
				</div>
			</div>
		</div>
	);
}
