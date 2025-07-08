"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


export default function Creative(props: ComponentProps) {
	const { current } = props;

	const animation = useAnimation();

	useEffect(() => {
		if (current == "creative") {
			animation.start({
				x: "-200vw",
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				},
			});
		} else {
			animation.start({
				x: "200vw",
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				}
			});
		}
	}, [current, animation]);

	return (
		<motion.div className="creative" animate={animation}>
			<div className="row">
				<div className="col-12 col-lg-6 col-md-3 header-col">
					<div className="header-box">
						<h1>Creative.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>The enthuisiast side of me.</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-lg-6 col-md-9 col-content">
					<div className="row row-cols-3">
						<div className="col-12 col-md-4">
							<div className="ig">
								<p>Surfing, content creation and the more human side of me.</p>
							</div>
							<a className="icon" href="https://www.instagram.com/jadon.hansen" target="_blank" rel="noreferrer">
								<FaInstagram
									className="img"
									color="grey"
									size={18}
								/>
								@jadon.hansen
							</a>
						</div>
						<div className="col-12 col-md-4">
							<div className="car-ig">
								<p>Follow my passion for cars.</p>
							</div>
							<a className="icon" href="https://www.instagram.com/_i30njoy_/" target="_blank" rel="noreferrer">
								<FaInstagram
									className="img"
									color="grey"
									size={18}
								/>
								@_i30njoy_
							</a>
						</div>
						<div className="col-12 col-md-4">
							<div className="youtube">
								<p>Check out my YouTube channel featuring POV style surfing sessions.</p>
							</div>
							<a className="icon" href="https://www.youtube.com/c/RawSessionss" target="_blank" rel="noreferrer">
								<SlSocialYoutube
									className="img"
									color="grey"
									size={20}
								/>
								Raw Sessions
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
