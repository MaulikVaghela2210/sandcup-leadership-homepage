import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/AboutSection";
import Milestones from "../components/Milestones";
import Vision from "../components/Vision";
import News from "../components/News";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            {/* Navbar inside Hero */}
            <Navbar />
            <HeroSection />
            <About />
            <Milestones />
            <Vision />
            <News />
            <CTA />
            <Testimonials />
            <Footer />
        </>
    );
}
