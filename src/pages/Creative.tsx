import React from "react";

import "../styles/creative.scss";

export default function Creative() {
	return (
		<div className="container creative">
			<div className="row">

				<div className="col header-col">
					<div className="header-box">
						<h1>Creative.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>The enthuisiast side of me.</p>
						</div>
					</div>
				</div>

				<div className="col-6 col-content">
					<div className="row row-cols-3">
						<div className="col">
							<div className="ig">
								<p>Photography, surfing, content creation and the more human side of me.</p>
							</div>
							<a className="icon" href="https://www.instagram.com/jadon.hansen" target="_blank" rel="noreferrer">
								@jadon.hansen
								<img src={require("../assets/images/instagram.png")} />
							</a>
						</div>
						<div className="col">
							<div className="dev-ig">
								<p>Follow my developer lifestlye and for updates on all of my projects.</p>
							</div>
							<a className="icon" href="https://www.instagram.com/developer.jadon" target="_blank" rel="noreferrer">
								@developer.jadon
								<img src={require("../assets/images/instagram.png")} />
							</a>
						</div>
						<div className="col">
							<div className="youtube">
								<p>Check out my YouTube channel featuring some POV style surfing sessions.</p>
							</div>
							<a className="icon" href="https://www.youtube.com/c/RawSessionss" target="_blank" rel="noreferrer">
								Raw Sessions
								<img src={require("../assets/images/youtube.png")} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
