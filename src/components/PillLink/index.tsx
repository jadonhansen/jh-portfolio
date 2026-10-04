import { FiArrowUpRight } from "react-icons/fi";

import type { LinkItem } from "@/data/site";
import "./index.scss";


interface PillLinkProps {
    link: LinkItem;
    variant?: "primary" | "secondary";
}


// In-page "#anchors" stay in the tab; absolute URLs open a new tab.
export default function PillLink({ link, variant = "primary" }: PillLinkProps) {
    const isExternal = !link.href.startsWith("#");

    return (
        <a
            className={`pill pill--${variant}`}
            href={link.href}
            {...(isExternal && { target: "_blank", rel: "noreferrer" })}
        >
            {link.label}
            {isExternal && (
                <>
                    <FiArrowUpRight className="pill__icon" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                </>
            )}
        </a>
    );
}
