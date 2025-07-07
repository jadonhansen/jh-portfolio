"use client";

import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import LinksBar from "@/components/LinksBar";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { ComponentProps } from "@/types/interfaces";

import "./globals.scss";
import "./app.scss";
import Head from "./head";

// export const metadata: Metadata = {
//   title: "Jadon Hansen",
//   description: "Jadon Hansen's portfolio website",
// };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

	const [pages, setPages] = useState({ current: "home", previous: "home" } as ComponentProps);

	const changePage = (page: string) => {
		const prev = pages.previous;

		setPages({ current: page, previous: prev });
	};

	return (
		<html lang="en">
			<head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
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

				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
					integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
					crossOrigin="anonymous"
					async
				/>
			</body>
		</html>
	);
}
