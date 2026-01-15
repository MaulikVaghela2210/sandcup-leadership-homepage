import {
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa6";

export default function CTA() {
    return (
        <section
            id="CTA"
            className="relative text-white"
            style={{
                backgroundImage: "url('/assets/CTA/cta-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B1A45]/60"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-20">

                {/* TOP CTA */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 items-center text-center md:text-left">

                    {/* CENTER DIVIDER (ONLY DESKTOP) */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/30"></div>

                    {/* LEFT */}
                    <div className="md:pl-16 md:pr-4">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-5">
                            Become a Volunteer
                        </h3>

                        <p className="text-white/85 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-7">
                            Get involved in events, campaigns, and youth initiatives that
                            encourage participation and help build a stronger India.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="px-7 py-3 border border-white rounded-md
        hover:bg-white hover:text-[#0B1A45]
        transition font-medium"
                            >
                                SIGN UP
                            </button>
                        </a>

                    </div>

                    {/* RIGHT */}
                    <div className="md:pl-16">
                        <h3 className="text-4xl md:text-5xl font-semibold mb-5">
                            Support the Mission
                        </h3>

                        <p className="text-white/85 text-lg md:text-xl max-w-md mx-auto md:mx-0 mb-7">
                            Help amplify programs focused on education, global exposure,
                            and national development.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="px-7 py-3 border border-white rounded-md
                                hover:bg-white hover:text-[#0B1A45]
                                transition font-medium"
                            >
                                CONTRIBUTE
                            </button>
                        </a>

                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-16 border-t border-white/20"></div>

                {/* SOCIAL */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-10 flex-wrap justify-center">
                        <p className="text-white text-xl md:text-2xl font-medium">
                            Follow on Social Media
                        </p>

                        <div className="flex gap-8 text-2xl md:text-3xl">
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

            </div>
        </section>
    );
}
