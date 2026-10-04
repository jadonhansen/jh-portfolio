import Image from "next/image";

import PillLink from "@/components/PillLink";
import Reveal from "@/components/Reveal";
import { PROFILE, SECTION_IDS } from "@/data/site";
import "./index.scss";


export default function Hero() {
    return (
        <section className="hero" id={SECTION_IDS.top} aria-label="Introduction">
            <div className="hero__text">
                <Reveal className="hero__intro-line">
                    <h1 className="hero__greeting">
                        {PROFILE.greeting} <span className="hero__name">{PROFILE.name}</span>
                    </h1>
                    <p className="hero__role">{PROFILE.role}</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="hero__headline">
                        {PROFILE.tagline.lead}{" "}
                        <span className="hero__headline-aside">{PROFILE.tagline.aside}</span>
                    </p>
                </Reveal>

                <Reveal className="hero__footer" delay={0.2}>
                    <p className="hero__intro">{PROFILE.intro}</p>
                    <div className="hero__actions">
                        <PillLink link={{ label: "contact me", href: `#${SECTION_IDS.contact}` }} />
                        <PillLink link={{ label: "view work", href: `#${SECTION_IDS.work}` }} variant="secondary" />
                    </div>
                </Reveal>
            </div>

            <figure className="hero__portrait">
                <Image
                    src={PROFILE.portrait.src}
                    alt={PROFILE.portrait.alt}
                    preload
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 28rem, 80vw"
                />
            </figure>
        </section>
    );
}
