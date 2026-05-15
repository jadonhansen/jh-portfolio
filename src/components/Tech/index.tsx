"use client";

import { motion } from "framer-motion";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


const TRANSITION = { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const };


export default function Tech({ current }: ComponentProps) {
    const getX = () => {
        if (current === "tech") return "-100vw";
        return current === "home" ? "100vw" : "-200vw";
    };

    return (
        <motion.div className="tech" animate={{ x: getX() }} transition={TRANSITION}>
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
                                <div>
                                    <p>GitHub. The well known place where all developers worth their salt store some next generation super secret code...shh.</p>
                                    <p>Check out my public work by visiting my GitHub.</p>
                                </div>
                                <a href="https://github.com/jadonhansen" target="_blank" rel="noreferrer" className="icon">
                                    <FiGithub className="img" color="rgb(255, 255, 255)" size={21} />
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

                        <div className="col-12 col-sm-6 owners-circle left">
                            <div className="overlay">
                                <button>
                                    <a href="https://ownerscircle.world" target="_blank" rel="noreferrer">
                                        Visit site
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 right">
                            <div className="text-box">
                                <p className="subheading">Owners Circle</p>
                                <p>
                                    My latest venture. Owners Circle is a platform built for vehicle owners to connect, discover, and share - a community made by enthusiasts, for enthusiasts.
                                </p>
                                <a href="https://ownerscircle.world" target="_blank" rel="noreferrer" className="icon">
                                    <FiGlobe className="img" color="rgb(255, 255, 255)" size={21} />
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 left">
                            <div className="text-box">
                                <p className="subheading">Mobile apps</p>
                                <p>
                                    Building fluid and pleasing mobile applications has always been a passion of mine. See my apps portfolio to view all of the iOS and Android apps I have brought to life
                                    with React Native and Expo.
                                </p>
                                <a href="https://apps.jadonhansen.com/" target="_blank" rel="noreferrer" className="icon">
                                    <CiMobile3 className="img" color="rgb(255, 255, 255)" size={23} />
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 apps right">
                            <div className="overlay">
                                <button>
                                    <a href="https://apps.jadonhansen.com/" target="_blank" rel="noreferrer">
                                        View apps
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 blog left">
                            <div className="overlay">
                                <button>
                                    <a href="https://www.linkedin.com/in/jadonhansen/" target="_blank" rel="noreferrer">
                                        View experience
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 right">
                            <div className="text-box">
                                <p className="subheading">Experience</p>
                                <p>Visit my LinkedIn profile to learn more about my professional work experience and journey.</p>
                                <a href="https://www.linkedin.com/in/jadonhansen/" target="_blank" rel="noreferrer" className="icon">
                                    <FaLinkedin className="img" color="rgb(255, 255, 255)" size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
