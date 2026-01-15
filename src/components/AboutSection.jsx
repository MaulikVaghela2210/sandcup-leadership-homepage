import AboutImg from "../assets/about-leader.png"; // left side image
import AboutBg from "../assets/AboutImg.png";
import { FaBalanceScale, FaChessKing, FaGlobeAsia, FaFlag } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section
            id="AboutSection"
            className="
                relative
                py-20
                bg-cover
                bg-center
            "
            style={{
                backgroundImage: `url(${AboutBg})`,
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-start md:items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center md:justify-start mb-10 md:mb-0">
                    <img
                        src={AboutImg}
                        alt="Dr. S. Jaishankar"
                        className="w-full max-w-md rounded-2xl object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>

                    {/* Small Title */}
                    <p className="text-normal tracking-widest text-[#CC7E29]">
                        About Dr. S. Jaishankar
                    </p>

                    {/* Main Heading */}
                    <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-snug text-[#0A1A44]">
                        A Leader Shaping India’s <br />
                        Global Future
                    </h2>

                    {/* Description */}
                    <p className="mt-5 text-black leading-relaxed">
                        Dr. Subrahmanyam Jaishankar is <span className="font-semibold">
                            India’s Minister of External Affairs
                        </span> and one of the nation’s most respected diplomats.
                        From shaping foreign policy to representing India globally,
                        his journey reflects commitment, strategic thinking,
                        and service to the nation.
                        <br />
                        He has also served in other diplomatic assignments in
                        Embassies in Moscow, Colombo, Budapest and Tokyo, as well
                        as in the Ministry of External Affairs and the President’s
                        Secretariat. He was also President Global Corporate Affairs
                        at Tata Sons Private Limited...
                        {/* Know More */}
                        <a
                            href="https://www.linkedin.com/in/maulik-vaghela-47a5b227b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-[#CC7E29] underline font-medium">
                                Know More
                            </button>
                        </a>

                    </p>



                    {/* VALUES */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10">

                        {/* Item 1 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <FaBalanceScale className="text-[#CC7E29] text-3xl mb-3" />
                            <h4 className="text-lg font-bold text-[#0B1A45]">
                                Integrity & Accountability
                            </h4>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <FaChessKing className="text-[#CC7E29] text-3xl mb-3" />
                            <h4 className="text-lg font-bold text-[#0B1A45]">
                                Strategic Vision
                            </h4>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <FaGlobeAsia className="text-[#CC7E29] text-3xl mb-3" />
                            <h4 className="text-lg font-bold text-[#0B1A45]">
                                Global Cooperation
                            </h4>
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <FaFlag className="text-[#CC7E29] text-3xl mb-3" />
                            <h4 className="text-lg font-bold text-[#0B1A45]">
                                India First Pragmatism
                            </h4>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
}
