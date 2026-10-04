import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "@/components/Reveal";
import { GALLERY, SECTION_IDS } from "@/data/site";
import "./index.scss";


export default function OffTheClock() {
    return (
        <section className="section off-clock" id={SECTION_IDS.offTheClock} aria-labelledby="off-clock-title">
            <Reveal className="section__head section__head--center">
                <h2 className="section__title" id="off-clock-title">off the clock</h2>
                <p className="section__lede">Cars, fitness and surf, mostly.</p>
            </Reveal>

            <ul className="off-clock__list">
                {GALLERY.map((card, index) => {
                    const { channel } = card;
                    const Icon = channel.link.icon;

                    return (
                        <li className="card" key={card.id}>
                            <Reveal className="card__inner" delay={index * 0.08}>
                                <Image
                                    className="card__image"
                                    src={card.image.src}
                                    alt={card.image.alt}
                                    loading="lazy"
                                    sizes="(min-width: 1024px) 18rem, 50vw"
                                />
                                <div className="card__caption">
                                    <div className="card__text">
                                        <a className="card__link" href={channel.link.href} target="_blank" rel="noreferrer">
                                            {channel.handle}
                                            <span className="sr-only"> on {channel.platform} (opens in a new tab)</span>
                                        </a>
                                        <p className="card__platform">
                                            {Icon && <Icon aria-hidden="true" />}
                                            {channel.platform}
                                        </p>
                                        {card.note && <p className="card__note">{card.note}</p>}
                                    </div>
                                    <span className="card__arrow" aria-hidden="true">
                                        <FiArrowUpRight />
                                    </span>
                                </div>
                            </Reveal>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
