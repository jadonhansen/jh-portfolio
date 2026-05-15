import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.scss";


export const metadata: Metadata = {
    title: "Jadon Hansen",
    description: "Jadon Hansen's portfolio — Developer, Creator, Enthusiast",
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
