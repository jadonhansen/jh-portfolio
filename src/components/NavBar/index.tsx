"use client";

import { useEffect, useState } from "react";

import { NAV_LINKS, PROFILE, SECTION_IDS } from "@/data/site";
import "./index.scss";


// Tracks which nav section is in view: a section is active while it crosses a band
// just above the middle of the viewport. The footer is short, so it counts once it is mostly visible.
function useActiveSection(): string | null {
    const [bandId, setBandId] = useState<string | null>(null);
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const sections = [SECTION_IDS.top, ...NAV_LINKS.map((link) => link.id)]
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const band = new IntersectionObserver(
            (entries) => {
                const hit = entries.find((entry) => entry.isIntersecting);
                if (hit) setBandId(hit.target.id);
            },
            { rootMargin: "-40% 0px -55% 0px" },
        );
        sections.forEach((el) => band.observe(el));

        const footer = document.getElementById(SECTION_IDS.contact);
        const bottom = new IntersectionObserver(
            ([entry]) => setFooterVisible(entry.isIntersecting),
            { threshold: 0.6 },
        );
        if (footer) bottom.observe(footer);

        return () => {
            band.disconnect();
            bottom.disconnect();
        };
    }, []);

    return footerVisible ? SECTION_IDS.contact : bandId;
}


export default function NavBar() {
    const active = useActiveSection();

    return (
        <header className="nav">
            <nav className="nav__inner" aria-label="Sections">
                <a className="nav__brand" href={`#${SECTION_IDS.top}`} aria-label={`${PROFILE.name}, back to top`}>
                    jh
                </a>
                <ul className="nav__links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                className="nav__link"
                                href={`#${link.id}`}
                                aria-current={active === link.id ? "true" : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
