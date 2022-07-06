import React from "react";

import "../styles/tech.scss";

export default function Tech() {
	return (
		<div className="container tech">
			<div className="row">

				<div className="col header-col">
					<div className="header-box">
						<h1>Tech.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>Otherwise known as work or passion projects.</p>
						</div>
					</div>
				</div>

				<div className="col-6 content-col">
					<div className="row row-cols-2 scroll-box">

						<div className="col left">
							<div className="text-box">
								<p>GitHub. The well known place where all developers worth their salt store some next generation super secret code...shh.</p>
								<a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer" className="icon">
									<img src={require("../assets/images/github.png")} />
								</a>
							</div>
						</div>

						<div className="col github right">
							<div className="overlay">
								<button>
									<a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer">View projects</a>
								</button>
							</div>
						</div>

						<div className="col apps left">
							<div className="overlay">
								<button>
									<a href="https://apps.jadonhansen.co.za/" target="_blank" rel="noreferrer">View apps</a>
								</button>
							</div>
						</div>

						<div className="col right">
							<div className="text-box">
								<p>Building fluid and pleasing mobile applications has always been a goal of mine. See my apps portfolio to view all of the iOS and Android apps I have brought to life with React Native.</p>
								<a href="https://apps.jadonhansen.co.za/" target="_blank" rel="noreferrer" className="icon">
									<img src={require("../assets/images/smartphone.png")} />
								</a>
							</div>
						</div>

						<div className="col left">
							<div className="text-box">
								<p>I have recently started a series of articles teaching the basics and intricacies of React Native as well as Expo. Check it out, you might learn something!</p>
								<a href="https://blog.jadonhansen.co.za/" target="_blank" rel="noreferrer" className="icon">
									<img className="edit-img" src={require("../assets/images/blog.png")} />
								</a>
							</div>
						</div>

						<div className="col blog right">
							<div className="overlay">
								<button>
									<a href="https://blog.jadonhansen.co.za/" target="_blank" rel="noreferrer">View articles</a>
								</button>
							</div>
						</div>

						<div className="col kofi left">
							<div className="overlay">
								<button>
									<a href="https://ko-fi.com/jadonhansen" target="_blank" rel="noreferrer">Donate</a>
								</button>
							</div>
						</div>

						<div className="col right">
							<div className="text-box">
								<div>
									<p>Developers need sustenance too! Support me on Ko-Fi and donate or buy me a coffee so that I can keep producing some high quality apps for everyone.</p>
									<p>Scan the QR code or tap the coffee icon below.</p>
								</div>
								<a href="https://ko-fi.com/jadonhansen" target="_blank" rel="noreferrer" className="icon">
									<img src={require("../assets/images/coffee.png")} />
								</a>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
