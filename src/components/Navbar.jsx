import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LogoImg from "../assets/DRJaisankarLogoFinal.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const menuItems = [
        { name: "Home", id: "HeroSection" },
        { name: "About", id: "AboutSection" },
        { name: "Achievements", id: "Milestones" },
        { name: "News & Update", id: "News" },
        { name: "Contact Us", id: "CTA" },
    ];

    // SCROLL BG CHANGE
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 👇 SMOOTH SCROLL FUNCTION
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActive(id);
            setOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`
                fixed top-0 left-0 w-full z-50
                transition-all duration-500
                ${scrolled ? "bg-[#0B1A45] shadow-md" : "bg-transparent"}
            `}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">

                {/* LOGO */}
                <div
                    className="cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <img src={LogoImg} alt="dr.jaishankar" className="h-10 w-auto" />
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-10 text-base font-light text-gray-200">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                cursor-pointer transition-colors duration-300
                                ${active === item.id
                                    ? "text-[#CC7E29] font-normal"
                                    : "hover:text-[#CC7E29]"
                                }
                            `}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-[#0B1A45]"
                >
                    <ul className="flex flex-col px-6 py-6 gap-5 text-gray-200 text-sm font-light">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    cursor-pointer transition-all duration-300
                                    ${active === item.id
                                        ? "text-[#CC7E29] font-normal"
                                        : "hover:text-[#CC7E29]"
                                    }
                                `}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
