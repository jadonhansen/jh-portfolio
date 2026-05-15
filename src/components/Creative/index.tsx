"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";

import { ComponentProps } from "../../types/interfaces";
import "./index.scss";


const TRANSITION = { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const };

const CHANNELS = [
    {
        index: "01",
        handle: "@jadon.hansen",
        platform: "Instagram",
        description: "Not sure why I have this, but I do.",
        Icon: FaInstagram,
        href: "https://www.instagram.com/jadon.hansen",
        bgClass: "bg-jadon",
    },
    {
        index: "02",
        handle: "@_i30njoy_",
        platform: "Instagram",
        description: "The drivers car.",
        Icon: FaInstagram,
        href: "https://www.instagram.com/_i30njoy_/",
        bgClass: "bg-car",
    },
    {
        index: "03",
        handle: "@white.prelude.bb6",
        platform: "Instagram",
        description: "The Honda Prelude build.",
        Icon: FaInstagram,
        href: "https://www.instagram.com/white.prelude.bb6/",
        bgClass: "bg-prelude-ig",
    },
    {
        index: "04",
        handle: "@jadon_hansen",
        platform: "YouTube",
        description: "Car content and more.",
        Icon: SlSocialYoutube,
        href: "https://www.youtube.com/@jadon_hansen",
        bgClass: "bg-prelude-yt",
    },
    {
        index: "05",
        handle: "Raw Sessions",
        platform: "YouTube",
        description: "POV style surfing sessions.",
        Icon: SlSocialYoutube,
        href: "https://www.youtube.com/c/RawSessionss",
        bgClass: "bg-surf",
    },
] as const;


export default function Creative({ current }: ComponentProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            className="creative"
            animate={{ x: current === "creative" ? "-200vw" : "200vw" }}
            transition={TRANSITION}
        >
            {CHANNELS.map((ch, i) => (
                <div
                    key={ch.bgClass}
                    className={`creative-bg ${ch.bgClass}${hovered === i ? " visible" : ""}`}
                />
            ))}

            <div className="creative-inner">
                <div className="creative-header">
                    <h1>Creative.</h1>
                    <div className="subheading-box">
                        <p className="line" />
                        <p>The enthusiast side of me.</p>
                    </div>
                </div>

                <nav className="channel-list">
                    {CHANNELS.map((ch, i) => (
                        <a
                            key={ch.index}
                            className={`channel-row${hovered === i ? " active" : ""}`}
                            href={ch.href}
                            target="_blank"
                            rel="noreferrer"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <span className="num"><ch.Icon size={16} /></span>
                            <span className="handle">{ch.handle}</span>
                            <span className="desc">{ch.description}</span>
                            <span className="platform-badge">{ch.platform}</span>
                            <FiArrowUpRight className="arrow" size={16} />
                        </a>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
}
