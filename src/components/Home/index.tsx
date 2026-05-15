"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


const TRANSITION = { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const };


export default function Home({ current }: ComponentProps) {
    return (
        <motion.div
            className="home"
            animate={{ x: current === "home" ? 0 : "-100vw" }}
            transition={TRANSITION}
        >
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

                <motion.div
                    className="col col-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="overlay">
                        <p>Developer</p>
                        <p>Creator</p>
                        <p>Enthusiast</p>
                        <p>Surfer</p>
                        <p>Human</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
