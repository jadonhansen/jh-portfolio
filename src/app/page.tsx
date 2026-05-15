"use client";

import Navbar from "@/components/NavBar";
import LinksBar from "@/components/LinksBar";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { ComponentProps } from "@/types/interfaces";


export default function Page() {

    const [pages, setPages] = useState<ComponentProps>({ current: "home", previous: "home" });

    const changePage = (page: string) => {
        setPages({ current: page, previous: pages.current });
    };

    return (
        <div className="appContainer">
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
