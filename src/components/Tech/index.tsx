"use client";

import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


export default function Tech(props: ComponentProps) {
	const { current, previous } = props;

	const animation = useAnimation();

	useEffect(() => {
		if (current == "tech") {
			animation.start({
				x: previous == "home" ? "-100vw" : "100vw",
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				},
			});
		} else {
			animation.start({
				x: current == "home" ? "100vw" : "-200vw",
				transition: {
					duration: 1.2,
					ease: [0.76, 0, 0.24, 1],
				}
			});
		}
	}, [current, animation, previous]);

	return (
		<motion.div className="tech" animate={animation}>
			<div className="row">
				<div className="col-12 col-md-6 header-col">
					<div className="header-box">
						<h1>Tech.</h1>
						<div className="subheading-box">
							<p className="line"></p>
							<p>Otherwise known as work or passion projects.</p>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 content-col">
					<div className="row row-cols-2">
						<div className="col-12 col-sm-6 left">
							<div className="text-box">
								<p className="code-subheading">The code</p>
								<p>GitHub. The well known place where all developers worth their salt store some next generation super secret code...shh.</p>
								<a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer" className="icon">
									<FiGithub
										className="img"
										color="grey"
										size={22}
									/>
								</a>
							</div>
						</div>

						<div className="col-12 col-sm-6 github right">
							<div className="overlay">
								<button>
									<a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer">
										View projects
									</a>
								</button>
							</div>
						</div>

						<div className="col-12 col-sm-6 apps left">
							<div className="overlay">
								<button>
									<a href="https://apps.jadonhansen.com/" target="_blank" rel="noreferrer">
										View apps
									</a>
								</button>
							</div>
						</div>

						<div className="col-12 col-sm-6 right">
							<div className="text-box">
								<p className="subheading">Mobile apps</p>
								<p>
									Building fluid and pleasing mobile applications has always been a goal of mine. See my apps portfolio to view all of the iOS and Android apps I have brought to life
									with React Native and Expo.
								</p>
								<a href="https://apps.jadonhansen.com/" target="_blank" rel="noreferrer" className="icon">
									<CiMobile3
										className="img"
										color="grey"
										size={22}
									/>
								</a>
							</div>
						</div>

						<div className="col-12 col-sm-6 left">
							<div className="text-box">
								<p className="subheading">Tutorial series</p>
								<p>I have recently started a series of articles teaching the basics and intricacies of React Native as well as Expo. Check it out, you might learn something!</p>
								<a href="https://dev.jadonhansen.com/" target="_blank" rel="noreferrer" className="icon">
									<CiEdit
										className="img"
										color="grey"
										size={23}
									/>
								</a>
							</div>
						</div>

						<div className="col-12 col-sm-6 blog right">
							<div className="overlay">
								<button>
									<a href="https://dev.jadonhansen.com/" target="_blank" rel="noreferrer">
										View articles
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
