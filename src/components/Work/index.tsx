import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import PillLink from "@/components/PillLink";
import Reveal from "@/components/Reveal";
import {
    EXPERIENCE,
    PROJECTS,
    SECTION_IDS,
    type Project,
    type ProjectGroup,
    type SupportingNote,
} from "@/data/site";
import "./index.scss";


const isGroup = (entry: Project | ProjectGroup): entry is ProjectGroup => "projects" in entry;


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


// Every project reads in the same order: eyebrow, title, description, store links, actions.
function ProjectBody({ project, titleId, nested = false }: { project: Project; titleId: string; nested?: boolean }) {
    const Heading = nested ? "h4" : "h3";
    const { stores } = project;

    return (
        <Reveal className="project__body" delay={0.1}>
            <div className="project__text">
                <hgroup className="project__heading">
                    {project.eyebrow && <p className="project__eyebrow">{project.eyebrow}</p>}
                    <Heading className={`project__title${nested ? " project__title--product" : ""}`} id={titleId}>
                        {project.title}
                    </Heading>
                </hgroup>
                <p className="project__description">{project.description}</p>
            </div>

            {stores && (
                <div className="project__stores">
                    <a
                        className="project__store"
                        href={stores.appStore}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on the App Store (opens in a new tab)`}
                    >
                        <FaApple aria-hidden="true" />
                        <span>App Store</span>
                    </a>
                    <a
                        className="project__store"
                        href={stores.playStore}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on Google Play (opens in a new tab)`}
                    >
                        <FaGooglePlay aria-hidden="true" />
                        <span>Google Play</span>
                    </a>
                </div>
            )}

            {project.link && (
                <div className="project__actions">
                    <PillLink link={project.link} />
                    {project.secondaryLink && <PillLink link={project.secondaryLink} variant="secondary" />}
                </div>
            )}
        </Reveal>
    );
}


function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
    const titleId = `project-${project.id}`;

    return (
        <article className={`project${flip ? " project--flip" : ""}`} aria-labelledby={titleId}>
            <ProjectVisual project={project} />
            <ProjectBody project={project} titleId={titleId} />
        </article>
    );
}


function ProjectGroupBlock({ group }: { group: ProjectGroup }) {
    const titleId = `project-${group.id}`;

    return (
        <div className="project-group">
            <Reveal className="project-group__head">
                <div className="project-group__text">
                    <h3 className="project__eyebrow" id={titleId}>{group.category}</h3>
                    <p className="project__description">{group.intro}</p>
                </div>
                <PillLink link={group.link} variant="secondary" />
            </Reveal>

            <div className="project-group__list">
                {group.projects.map((project) => {
                    const productTitleId = `project-${project.id}`;

                    return (
                        <article className="product" aria-labelledby={productTitleId} key={project.id}>
                            <ProjectVisual project={project} />
                            <ProjectBody project={project} titleId={productTitleId} nested />
                        </article>
                    );
                })}
            </div>
        </div>
    );
}


function SupportingStrip({ note }: { note: SupportingNote }) {
    const titleId = "work-experience";

    return (
        <article className="supporting" aria-labelledby={titleId}>
            <Reveal className="supporting__inner">
                <div className="supporting__text">
                    <h3 className="supporting__title" id={titleId}>{note.title}</h3>
                    <p className="project__description">{note.description}</p>
                </div>
                <div className="project__actions">
                    <PillLink link={note.link} />
                    {note.secondaryLink && <PillLink link={note.secondaryLink} variant="secondary" />}
                </div>
            </Reveal>
        </article>
    );
}


export default function Work() {
    // Standalone rows alternate sides on wide screens; groups span both columns and do not count.
    const rows = PROJECTS.filter((entry) => !isGroup(entry));

    return (
        <section className="section work" id={SECTION_IDS.work} aria-labelledby="work-title">
            <Reveal className="section__head section__head--center">
                <h2 className="section__title" id="work-title">work</h2>
                <p className="section__lede">A few things I have built, and where to find the rest.</p>
            </Reveal>

            <div className="work__list">
                {PROJECTS.map((entry) => (
                    isGroup(entry)
                        ? <ProjectGroupBlock key={entry.id} group={entry} />
                        : <ProjectRow key={entry.id} project={entry} flip={rows.indexOf(entry) % 2 === 1} />
                ))}
                <SupportingStrip note={EXPERIENCE} />
            </div>
        </section>
    );
}
