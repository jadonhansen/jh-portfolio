import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { ComponentProps } from "../interfaces/interfaces";
import "../styles/navbar.scss";

export default function Navbar(props: ComponentProps) {
	const { current, changePage } = props;

	const animation = useAnimation();

	useEffect(() => {
		if (current == "home") {
			animation.start({
				left: 0,
				width: "2.5rem",
				transition: {
					duration: 1,
					ease: [0.76, 0, 0.24, 1],
				},
			});
		}
		if (current == "tech") {
			animation.start({
				left: "4.6rem",
				width: "2.1rem",
				transition: {
					duration: 1,
					ease: [0.76, 0, 0.24, 1],
				}
			});
		}
		if (current == "creative") {
			animation.start({
				left: "8.6rem",
				width: "3.5rem",
				transition: {
					duration: 1,
					ease: [0.76, 0, 0.24, 1],
				}
			});
		}
	}, [current]);

	function linkClick(str: string) {
		if (changePage) changePage(str);
	}

	return (
		<div className="nav-wrapper">
			<nav>
				<a onClick={() => linkClick("home")} className={current == "home" ? "active" : undefined}>Home</a>
				<a onClick={() => linkClick("tech")} className={current == "tech" ? "active" : undefined}>Tech</a>
				<a onClick={() => linkClick("creative")} className={current == "creative" ? "active" : undefined}>Creative</a>
				<motion.div animate={animation} className="underline"></motion.div>
			</nav>
		</div>
	);
}
