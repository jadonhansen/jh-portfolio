import React from "react";

import "../styles/home.scss";

export default function Home() {
	return (
		<div className="container home">
			<div className="row">
				<div className="col header-col">
					<div className="header-box">
						<h1>This is me.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>Jadon Hansen</p>
						</div>
					</div>
				</div>

				<div className="col col-content">
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
