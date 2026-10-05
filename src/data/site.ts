import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import portrait from "@/assets/images/jadon.jpg";
import ocDrivingCircle from "@/assets/images/oc-mockup-01.jpg";
import ocCollection from "@/assets/images/oc-mockup-02.jpg";
import ocDetail from "@/assets/images/oc-mockup-03.jpg";
import ocValue from "@/assets/images/oc-mockup-04.jpg";
import ocLiveDrive from "@/assets/images/oc-mockup-05.jpg";
import digiWallet from "@/assets/images/apps-1.png";
import scraperLanding from "@/assets/images/scraper-01.jpg";
import scraperStats from "@/assets/images/scraper-02.jpg";
import weather from "@/assets/images/w-2.jpg";
import surf from "@/assets/images/ig.jpg";
import prelude from "@/assets/images/prelude.jpg";


export interface Photo {
    src: StaticImageData;
    alt: string;
    // "contain" keeps cut-out artwork (transparent PNGs) uncropped.
    fit?: "cover" | "contain";
}

// href is either an absolute URL (opens in a new tab) or an in-page "#anchor".
export interface LinkItem {
    label: string;
    href: string;
    icon?: IconType;
}

export interface StoreLinks {
    appStore: string;
    playStore: string;
}

interface ProjectBase {
    id: string;
    // Small label above the title, such as the category the project belongs to.
    eyebrow?: string;
    title: string;
    description: string;
    stores?: StoreLinks;
    link?: LinkItem;
    secondaryLink?: LinkItem;
}

// A project shows one photo, a scrollable row of app screens, or a base screenshot with a detail overlapping it.
export type Project = ProjectBase & (
    | { image: Photo }
    | { screens: Photo[] }
    | { layered: { base: Photo; overlay: Photo } }
);

// Several projects under one category, sharing an intro line and one link.
export interface ProjectGroup {
    id: string;
    category: string;
    intro: string;
    link: LinkItem;
    projects: Project[];
}

export interface SupportingNote {
    title: string;
    description: string;
    link: LinkItem;
    secondaryLink?: LinkItem;
}

export interface Channel {
    platform: string;
    handle: string;
    link: LinkItem;
}

export interface GalleryCard {
    id: string;
    channel: Channel;
    image: Photo;
    note?: string;
}


export const URLS = {
    github: "https://github.com/jadonhansen",
    linkedin: "https://www.linkedin.com/in/jadonhansen/",
    instagram: "https://www.instagram.com/jadon.hansen",
    youtube: "https://www.youtube.com/@jadon_hansen",
    instagramScraper: "https://github.com/jadonhansen/instagram-scraper",
    ownersCircle: "https://ownerscircle.world",
    apps: "https://apps.jadonhansen.com/",
} as const;

export const SECTION_IDS = {
    top: "top",
    work: "work",
    offTheClock: "off-the-clock",
    contact: "contact",
} as const;

export const NAV_LINKS: { label: string; id: string }[] = [
    { label: "work", id: SECTION_IDS.work },
    { label: "off the clock", id: SECTION_IDS.offTheClock },
    { label: "contact", id: SECTION_IDS.contact },
];


export const PROFILE = {
    name: "Jadon Hansen",
    greeting: "hi, i'm",
    role: "senior frontend engineer",
    tagline: { lead: "i will finish what your PM started,", aside: "and with less token usage" },
    intro: "I build web and mobile products with React, Next.js and React Native, and I like them shipped more than I like them planned.",
    email: "jadonhansen@gmail.com",
    portrait: {
        src: portrait,
        alt: "Black and white photo of Jadon in a black t-shirt, standing by the water.",
    } satisfies Photo,
};

const ocScreen = (src: StaticImageData, headline: string): Photo => ({
    src,
    alt: `${headline}, Owners Circle app screen`,
});

export const PROJECTS: (Project | ProjectGroup)[] = [
    {
        id: "owners-circle",
        eyebrow: "Latest venture",
        title: "Owners Circle",
        description: "Take your automotive experience to the next level with Owners Circle by joining runs with real-time tracking, personalised collection management and club management.",
        screens: [
            ocScreen(ocDrivingCircle, "Your Driving Circle"),
            ocScreen(ocCollection, "Your Collection"),
            ocScreen(ocDetail, "Explore Your Collection in Detail"),
            ocScreen(ocValue, "Know the Value of Your Machine"),
            ocScreen(ocLiveDrive, "Track Every Drive, Live"),
        ],
        link: { label: "visit ownerscircle.world", href: URLS.ownersCircle },
    },
    {
        id: "mobile-apps",
        category: "My mobile apps",
        intro: "iOS and Android apps, built with React Native and Expo.",
        link: { label: "apps portfolio", href: URLS.apps },
        projects: [
            {
                id: "weatherly",
                title: "Weatherly",
                description: "Weatherly was designed for the user who doesn't have time to interpret complicated graphs and weather statistics. It covers the weather at your current location, 24 hour and 7 day forecasts, and location search with an interactive map.",
                image: {
                    src: weather,
                    alt: "Hands holding a phone running a weather app over a desk with a laptop, a cactus and a smartwatch.",
                },
                stores: {
                    appStore: "https://apps.apple.com/za/app/weatherly/id1583456822",
                    playStore: "https://play.google.com/store/apps/details?id=com.jadonhansen.weatherly",
                },
            },
            {
                id: "digiwallet",
                title: "DigiWallet",
                description: "Digitally store all of your barcoded loyalty, rewards or club cards. Add, edit and find a card quickly, then display it at the till.",
                image: {
                    src: digiWallet,
                    alt: "Two phones, one showing DigiWallet's list of loyalty card presets.",
                    fit: "contain",
                },
                stores: {
                    appStore: "https://apps.apple.com/us/app/digiwallet/id1593438301",
                    playStore: "https://play.google.com/store/apps/details?id=com.digiwalletapp.digiwallet",
                },
            },
        ],
    },
    {
        id: "instagram-scraper",
        eyebrow: "Open source",
        title: "IG Scraplytics",
        description: "Shows who really engages with your Instagram: the followers who never interact, the fans who don't follow back, and the accounts that stopped following you. Everything runs locally from your own logged-in browser.",
        layered: {
            base: { src: scraperLanding, alt: "IG Scraplytics landing page" },
            overlay: { src: scraperStats, alt: "IG Scraplytics dashboard stats" },
        },
        link: { label: "view instagram-scraper", href: URLS.instagramScraper },
        secondaryLink: { label: "more on github", href: URLS.github },
    },
];

export const EXPERIENCE: SupportingNote = {
    title: "Experience",
    description: "LinkedIn has the employers, the dates and the job titles, so this page does not have to.",
    link: { label: "view linkedin", href: URLS.linkedin },
    secondaryLink: { label: "get in touch", href: `#${SECTION_IDS.contact}` },
};


const INSTAGRAM: Channel = {
    platform: "Instagram",
    handle: "@jadon.hansen",
    link: { label: "Instagram", href: URLS.instagram, icon: FaInstagram },
};

const YOUTUBE: Channel = {
    platform: "YouTube",
    handle: "@jadon_hansen",
    link: { label: "YouTube", href: URLS.youtube, icon: FaYoutube },
};

export const GALLERY: GalleryCard[] = [
    {
        id: "surf",
        channel: INSTAGRAM,
        note: "Not sure why I have this, but I do.",
        image: { src: surf, alt: "Jadon on the beach in a wetsuit, holding a surfboard." },
    },
    {
        id: "prelude",
        channel: YOUTUBE,
        note: "Car content, mostly the builds.",
        image: { src: prelude, alt: "A white Honda Prelude driving up a parking garage ramp." },
    },
];

export const CONTACT_LINKS: LinkItem[] = [
    { label: "GitHub", href: URLS.github, icon: FaGithub },
    { label: "LinkedIn", href: URLS.linkedin, icon: FaLinkedin },
    INSTAGRAM.link,
    YOUTUBE.link,
];

// Faint backdrop behind the footer.
export const FOOTER_BACKDROP: StaticImageData = prelude;
