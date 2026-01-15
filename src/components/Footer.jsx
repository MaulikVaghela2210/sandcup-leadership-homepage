import { useState } from "react";
import {
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLocationDot,
    FaPhone,
    FaEnvelope
} from "react-icons/fa6";

const Footer = () => {
    const [active, setActive] = useState(null);

    const menuItems = [
        { name: "Home", id: "HeroSection" },
        { name: "About", id: "AboutSection" },
        { name: "Achievements", id: "Milestones" },
        { name: "News & Update", id: "News" },
        { name: "Contact Us", id: "CTA" },
    ];

    const menuClass = (name) =>
        `cursor-pointer transition
        ${active === name ? "text-[#FB9823]" : "hover:text-[#FB9823]"}`;

    // 🔹 Smooth Scroll (same logic as Navbar)
    const scrollToSection = (id, name) => {
        const el = document.getElementById(id);
        if (!el) return;

        const yOffset = -90; // navbar height
        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setActive(name);
    };

    return (
        <footer className="bg-[#0B1A45] text-white pt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">

                    {/* LEFT – LOGO */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="/assets/Footer/DRJaisankarLogoFinal.png"
                            alt="Logo"
                            className="h-16 object-contain"
                        />
                    </div>

                    {/* CENTER – MENU 1 */}
                    <ul className="space-y-4 text-sm text-center md:text-left md:ml-40">
                        {menuItems.slice(0, 3).map((item) => (
                            <li
                                key={item.name}
                                onClick={() => scrollToSection(item.id, item.name)}
                                className={menuClass(item.name)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    {/* CENTER – MENU 2 */}
                    <ul className="space-y-4 text-sm text-center md:text-left md:ml-20">
                        {menuItems.slice(3).map((item) => (
                            <li
                                key={item.name}
                                onClick={() => scrollToSection(item.id, item.name)}
                                className={menuClass(item.name)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT – CONTACT INFO */}
                    <div className="space-y-5 text-sm text-center md:text-left md:justify-self-end">
                        <div className="flex items-start gap-3 justify-center md:justify-start">
                            <FaLocationDot className="text-[#FB9823] mt-1" />
                            <p>74B South Block, New Delhi, India</p>
                        </div>

                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <FaPhone className="text-[#FB9823]" />
                            <p>+91 9876543210</p>
                        </div>

                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <FaEnvelope className="text-[#FB9823]" />
                            <p>info@maulikvaghela.in</p>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-white/20 mt-16"></div>

                {/* BOTTOM SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 text-sm text-gray-300">

                    <p className="text-center md:text-left">
                        © 2025 Maulik Vaghela. UI Development Assignment.
                    </p>

                    <div className="flex gap-6 text-lg">
                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaXTwitter className="cursor-pointer hover:text-[#FB9823] transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="cursor-pointer hover:text-[#FB9823] transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="cursor-pointer hover:text-[#FB9823] transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="cursor-pointer hover:text-[#FB9823] transition" />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
