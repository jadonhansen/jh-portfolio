import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import PillLink from "@/components/PillLink";
import Reveal from "@/components/Reveal";
import { PROJECTS, SECTION_IDS, type Project } from "@/data/site";
import "./index.scss";


function ProjectVisual({ project }: { project: Project }) {
    if ("screens" in project) {
        return (
            <Reveal className="project__visual">
                <div className="screens" role="region" aria-label={`${project.title} app screens`} tabIndex={0}>
                    <ul className="screens__track">
                        {project.screens.map((screen) => (
                            <li className="screens__item" key={screen.alt}>
                                <Image src={screen.src} alt={screen.alt} loading="lazy" sizes="14rem" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        );
    }

    if ("layered" in project) {
        const { base, overlay } = project.layered;

        return (
            <Reveal className="project__visual layered">
                <Image className="layered__base" src={base.src} alt={base.alt} loading="lazy" sizes="(min-width: 1024px) 26rem, 92vw" />
                <Image className="layered__overlay" src={overlay.src} alt={overlay.alt} loading="lazy" sizes="(min-width: 1024px) 23rem, 80vw" />
            </Reveal>
        );
    }

    const fit = project.image.fit ?? "cover";

    return (
        <Reveal className={`project__visual project__media project__media--${fit}`}>
            <Image
                src={project.image.src}
                alt={project.image.alt}
                loading="lazy"
                sizes="(min-width: 1024px) 28rem, 100vw"
            />
        </Reveal>
    );
}


function ProjectRow({ project }: { project: Project }) {
    const titleId = `project-${project.id}`;

    return (
        <article className="project" aria-labelledby={titleId}>
            <ProjectVisual project={project} />

            <Reveal className="project__body" delay={0.1}>
                <h3 className="project__title" id={titleId}>{project.title}</h3>
                <p className="project__description">{project.description}</p>

                {project.apps && (
                    <ul className="project__apps">
                        {project.apps.map((app) => (
                            <li className="app" key={app.name}>
                                <div className="app__text">
                                    <span className="app__name">{app.name}</span>
                                    {app.blurb && <span className="app__blurb">{app.blurb}</span>}
                                </div>
                                <div className="app__stores">
                                    <a
                                        className="app__store"
                                        href={app.appStore}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${app.name} on the App Store (opens in a new tab)`}
                                    >
                                        <FaApple aria-hidden="true" />
                                        <span>App Store</span>
                                    </a>
                                    <a
                                        className="app__store"
                                        href={app.playStore}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`${app.name} on Google Play (opens in a new tab)`}
                                    >
                                        <FaGooglePlay aria-hidden="true" />
                                        <span>Google Play</span>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="project__actions">
                    <PillLink link={project.link} />
                    {project.secondaryLink && <PillLink link={project.secondaryLink} variant="secondary" />}
                </div>
            </Reveal>
        </article>
    );
}


export default function Work() {
    return (
        <section className="section work" id={SECTION_IDS.work} aria-labelledby="work-title">
            <Reveal className="section__head section__head--center">
                <h2 className="section__title" id="work-title">work</h2>
                <p className="section__lede">A few things I have built, and where to find the rest.</p>
            </Reveal>

            <div className="work__list">
                {PROJECTS.map((project) => (
                    <ProjectRow key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
