import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { ComponentProps } from "../interfaces/interfaces";
import "../styles/home.scss";

export default function Home(props: ComponentProps) {
	const { current } = props;

	const animation = useAnimation();

	useEffect(() => {
		if (current == "home") {
			animation.start({
				x: 0,
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				},
			});
		} else {
			animation.start({
				x: "-100vw",
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				}
			});
		}
	}, [current]);

	return (
		<motion.div className="home" animate={animation}>
			<div className="row">
				<div className="col-xs-12 col-md-7 header-col">
					<div className="header-box">
						<h1>This is me.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>Jadon Hansen</p>
						</div>
					</div>
				</div>

				<div className="col col-content">
					<div className="overlay">
						<p>Developer</p>
						<p>Creator</p>
						<p>Enthuisiast</p>
						<p>Surfer</p>
						<p>Human</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
