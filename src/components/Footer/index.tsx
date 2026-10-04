import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { CONTACT_LINKS, FOOTER_BACKDROP, NAV_LINKS, PROFILE, SECTION_IDS } from "@/data/site";
import "./index.scss";


export default function Footer() {
    return (
        <footer className="footer" id={SECTION_IDS.contact} aria-labelledby="contact-title">
            <Image className="footer__backdrop" src={FOOTER_BACKDROP} alt="" loading="lazy" sizes="100vw" />

            <div className="footer__inner">
                <div className="footer__col">
                    <h2 className="footer__heading" id="contact-title">contact</h2>
                    <p className="footer__line">got something your PM started?</p>
                    <a className="footer__email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                    <ul className="footer__list">
                        {CONTACT_LINKS.map((link) => {
                            const Icon = link.icon;

                            return (
                                <li key={link.href}>
                                    <a className="footer__link" href={link.href} target="_blank" rel="noreferrer">
                                        {Icon && <Icon aria-hidden="true" />}
                                        {link.label}
                                        <FiArrowUpRight className="footer__arrow" aria-hidden="true" />
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <nav className="footer__col" aria-labelledby="footer-nav-title">
                    <h2 className="footer__heading" id="footer-nav-title">navigate</h2>
                    <ul className="footer__list">
                        <li>
                            <a className="footer__link" href={`#${SECTION_IDS.top}`}>home</a>
                        </li>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a className="footer__link" href={`#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer__col">
                    <h2 className="footer__heading">copyright</h2>
                    <p className="footer__legal">© {new Date().getFullYear()} {PROFILE.name}</p>
                </div>
            </div>
        </footer>
    );
}
