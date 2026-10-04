import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OffTheClock from "@/components/OffTheClock";
import Work from "@/components/Work";


export default function Page() {
    return (
        <>
            <a className="skip-link" href="#main">skip to content</a>
            <NavBar />
            <main id="main">
                <Hero />
                <Work />
                <OffTheClock />
            </main>
            <Footer />
        </>
    );
}
