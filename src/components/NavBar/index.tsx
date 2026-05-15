"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


const UNDERLINE_STATES: Record<string, { left: string | number; width: string }> = {
    home:     { left: 0,        width: "2.5rem" },
    tech:     { left: "4.6rem", width: "2.1rem" },
    creative: { left: "8.6rem", width: "3.5rem" },
};


export default function Navbar({ current, changePage }: ComponentProps) {
    return (
        <div className="nav-wrapper">
            <nav>
                <a
                    onClick={() => changePage?.("home")}
                    className={current === "home" ? "active" : undefined}
                >
                    Home
                </a>
                <a
                    onClick={() => changePage?.("tech")}
                    className={current === "tech" ? "active" : undefined}
                >
                    Tech
                </a>
                <a
                    onClick={() => changePage?.("creative")}
                    className={current === "creative" ? "active" : undefined}
                >
                    Creative
                </a>
                <motion.div
                    animate={UNDERLINE_STATES[current] ?? UNDERLINE_STATES.home}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="underline"
                />
            </nav>
        </div>
    );
}
