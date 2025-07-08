"use client";

import Head from "../components/head";
import Navbar from "@/components/NavBar";
import LinksBar from "@/components/LinksBar";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { ComponentProps } from "@/types/interfaces";

import "./globals.scss";


export default function Page() {

    const [pages, setPages] = useState({ current: "home", previous: "home" } as ComponentProps);

    const changePage = (page: string) => {
        const prev = pages.previous;

        setPages({ current: page, previous: prev });
    };

    return (
        <div className="appContainer">
            <Head />

            <Navbar
                current={pages.current}
                previous={pages.previous}
                changePage={changePage}
            />
            <LinksBar />
            <Navigation current={pages.current} previous={pages.previous} />
        </div>
    );
}
